import { describe, it, expect } from "vitest";
import { getImageUrl } from "@/lib/getImageUrl";

describe("getImageUrl", () => {
  it("returns the correct image URL for a valid filename", () => {
    const result = getImageUrl("test.jpg");
    expect(result).toBe("/testt.jpg");
  });

  it("returns the default fallback URL when input is falsy", () => {
    const result = getImageUrl("");
    expect(result).toBe("/test.jpg");
  });
});
