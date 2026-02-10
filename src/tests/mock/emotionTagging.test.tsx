import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import EmotionalRatingBtn from "../../components/atoms/EmotionalRatingBtn";
import { EMOTION_OPTIONS, type Emotion } from "../../types/emotion";
import { useState } from "react";

function TestWrapper() {
  // dummy data
  const [value, setValue] = useState({
    userEmotion: [] as Emotion[],
    emotionCounts: {
      happy: 0,
      sad: 0,
      mindBlown: 0,
      cozy: 0,
      scary: 0,
      motivational: 0,
    },
  });

  return (
    <EmotionalRatingBtn
      emotionOptions={EMOTION_OPTIONS}
      value={value}
      onChange={(newEmotions) =>
        setValue((prev) => ({
          ...prev,
          userEmotion: newEmotions,
        }))
      }
    />
  );
}

describe("EmotionalRatingBtn toggle logic", () => {
  it("Checks whether the Emoji Button toggle works when user clicks on it", async () => {
    // Arrange
    const user = userEvent.setup();
    render(<TestWrapper />);

    // Act
    const happyButton = screen.getByTestId("happy");

    // Assert
    await user.click(happyButton);
    expect(happyButton).toHaveAttribute("aria-pressed", "true");

    await user.click(happyButton);
    expect(happyButton).toHaveAttribute("aria-pressed", "false");
  });
});
