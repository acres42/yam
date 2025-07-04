#!/bin/bash

echo "🔧 Installing linting tools and setting up Husky..."

# 1. Install dev dependencies
npm install --save-dev husky lint-staged prettier eslint stylelint

# 2. Add prepare script if missing
if ! grep -q '"prepare":' package.json; then
  echo "📦 Adding prepare script..."
  jq '.scripts.prepare = "husky install"' package.json > temp.json && mv temp.json package.json
fi

# 3. Initialize husky (will create .husky folder)
npx husky install

# 4. Create pre-commit hook manually
mkdir -p .husky
cat > .husky/pre-commit <<'EOF'
#!/bin/sh
. "$(dirname "$0")/_/husky.sh"

npx lint-staged
EOF
chmod +x .husky/pre-commit

# 5. Add lint-staged config to package.json (only if not present)
if ! grep -q '"lint-staged":' package.json; then
  echo "🧹 Adding lint-staged config..."
  jq '. + {
    "lint-staged": {
      "*.{js,ts,astro}": ["prettier --write"],
      "*.{js,ts}": ["eslint --fix"],
      "*.css": ["stylelint --fix"]
    }
  }' package.json > temp.json && mv temp.json package.json
fi

# 6. Create minimal config files if they don't exist
[ ! -f .prettierrc ] && echo "{}" > .prettierrc
[ ! -f .eslintrc.json ] && echo "{}" > .eslintrc.json
[ ! -f .stylelintrc.json ] && echo "{}" > .stylelintrc.json

echo "✅ Husky + Lint-Staged + Formatters ready to go!"
echo "🔁 Run 'git add .' and 'git commit -m ...' to see it in action."
