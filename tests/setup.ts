import "@testing-library/jest-dom";
import { vi } from "vitest";
import dotenv from "dotenv";
dotenv.config();

vi.mock("../lib/images", () => ({
  headshots: {
    "carey_headshot.jpg": "/test-assets/carey.jpg",
  },
  marketing: {
    "family72.jpg": "/test-assets/family.jpg",
  },
}));
