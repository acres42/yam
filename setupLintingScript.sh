#!/bin/bash

echo "🔧 Installing linting tools and setting up Husky..."

# 1. Install dev dependencies (Astro + linting plugins)
npm install --save-dev \
  husky lint-staged prettier stylelint \
  eslint @typescript-eslint/parser \
  eslint-plugin-astro astro-eslint-parser \
  prettier-plugin-astro

# 2. Add prepare script if missing
if ! grep -q '"prepare":' package.json; then
  echo "📦 Adding prepare script..."
  jq '.scripts.prepare = "husky install"' package.json > temp.json && mv temp.json package.json
fi

# 3. Initialize husky (creates .husky folder)
npx husky install

# 4. Create pre-commit hook manually
mkdir -p .husky
cat > .husky/pre-commit <<'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
EOF
chmod +x .husky/pre-commit

# 5. Add lint-staged config to package.json (overwrite or add fresh)
jq 'del(.["lint-staged"]) + {
  "lint-staged": {
    "*.{js,ts,astro}": ["prettier --write"],
    "*.{js,ts}": ["eslint --fix"],
    "*.css": ["stylelint --fix"]
  }
}' package.json > temp.json && mv temp.json package.json

# 6. Create config files if they don't exist

# .prettierrc with Astro plugin
[ ! -f .prettierrc ] && cat > .prettierrc <<EOF
{
  "plugins": ["prettier-plugin-astro"],
  "overrides": [
    {
      "files": "*.astro",
      "options": { "parser": "astro" }
    }
  ]
}
EOF

# .eslintrc.json with Astro support
[ ! -f .eslintrc.json ] && cat > .eslintrc.json <<EOF
{
  "extends": [
    "eslint:recommended",
    "plugin:astro/recommended"
  ],
  "overrides": [
    {
      "files": ["*.astro"],
      "parser": "astro-eslint-parser",
      "parserOptions": {
        "parser": "@typescript-eslint/parser",
        "extraFileExtensions": [".astro"]
      },
      "rules": {}
    }
  ]
}
EOF

# .stylelintrc.json
[ ! -f .stylelintrc.json ] && echo "{}" > .stylelintrc.json

echo "✅ Husky, Lint-Staged, Prettier, ESLint, and Stylelint are ready to go!"
echo "🔁 Run 'git add .' and 'git commit -m ...' to see the pre-commit hook in action."
