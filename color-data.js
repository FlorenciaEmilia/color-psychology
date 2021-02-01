const colorData = {
  black: {
    name: "Black",
    intro:
      " In color psychology, black’s color meaning is symbolic of mystery, power, elegance, and sophistication. In contrast, the color meaning can also evoke emotions such as sadness and anger.",
    info:
      "Black is a color of sophistication, seriousness, control, and independence. Although, it can also be used to show evil, mystery, depression, and even death. Black is a very reserved color that completely lacks any light as its an absence of all the colors. It likes to stay hidden, in control, and separate from others. For this reason, black is a great color for high contrast and easy legibility. Unfortunately, since its a very powerful color, too much black can cause sadness and overall negativity so use it sparingly and in your text more so than the visuals itself.",
    key: "Formality, Dramatic, Sophistication, Security.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(135,134,134,1) 0%, rgba(6,0,0,1) 100%)",
    },
  },
  white: {
    name: "White",
    intro:
      "In color psychology, white showcases innocence, goodness, cleanliness, and humility. Keep in mind, that this is the meaning in North American culture. In some parts of the world, white has the opposite meaning.",
    info:
      "White is color that is complete and pure, making it a perfect example of purity, innocence, cleanliness, and peace. White can also represent new beginnings, providing a blank slate, and gives refreshment for new ideas. Since white has an equal balance of all the colors, it can exemplify several meanings, with equality outweighing them all. White is a great color for simplicity, cleanliness, and idea creation; however, avoid using too much white as it can cause isolation, loneliness, and emptiness.\n  Keep in mind, that this is the meaning in North American culture. In some parts of the world, white has the opposite meaning.",
    key: "Clean, Simplicity, Innocence, Honest.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(250,247,247,1) 0%, rgba(224,222,222,1) 100%)",
    },
  },
  red: {
    name: "Red",
    intro:
      "The red color meaning is associated with excitement, passion, danger, energy, and action.\n In color psychology, red is the most intense color. And thus, can provoke the strongest emotions. Red can also trigger danger so you want to use the color sparingly.",
    info:
      "Red is a very powerful, dynamic color that reflects our physical needs whether to show affection and love, or to portray terror, fear, and survival. Red is also a very energizing color that can portray friendliness and strength, but can also be demanding and show aggression depending on its context.\n Overall, if you're looking to have a really powerful presence or get someone's attention fast, red is your go-to color. Just remember to use it sparingly to avoid the extreme negative reactions it can so easily awaken.",
    key: "Excitement, Strength, Love, Energy.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(247,3,3,1) 0%, rgba(91,1,1,1) 100%)",
    },
  },
  blue: {
    name: "Blue",
    intro:
      "In color psychology, blue’s color meaning ties closely to the sea and the sky. Conversely, blue can also carry some negative color meanings such as depression and can bring about a sense of coldness.",
    info:
      "Blue is known for its trust and dependability. It's reliable, responsible, and mentally soothing. For that reason alone, it's one of the most-liked colors across the entire world.\n Unlike red, blue lends a more mental reaction rather than physical that allows us to distress, calm down, and think of the most ideal situation. Unfortunately, it also is one of the last colors to be seen, and can be perceived as distant, cold, or unfriendly if used it great amounts.\nOverall, blue is a well-liked color that can bring a sense of calmness and trust when building relationships, especially in marketing.",
    key: "Trust, Peace, Loyalty, Competence.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(58,247,239,1) 0%, rgba(18,67,212,1) 100%)",
    },
  },
  green: {
    name: "Green",
    intro:
      "In color psychology, green is highly connected to nature and money. Growth, fertility, health, and generosity are some of the positive color meanings for the color. The color meaning for green also carries some negative associations such as envy.",
    info:
      "Green is a color of balance and harmony. It lends us a clearer sense of right from wrong since green incorporates a balance of both the logical and emotional. Green is one of the most-seen colors in nature reflecting life, rest, and peace. It is also a sign of growth, whether that's in a physical object like plants or in our income and wealth.\n      Overall, if you're looking to portray health, rest, and to relieve stress, green is your color. While green does have minor negative aspects like over-possession and materialism, it has a more positive affect than most other colors.",
    key: "Nature, Healing, Freshness, Quality.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(93,247,58,1) 0%, rgba(6,126,22,1) 100%)",
    },
  },
  yellow: {
    name: "Yellow",
    intro:
      "In color psychology, the color meaning for yellow revolves around sunshine. It evokes feelings of happiness, positivity, optimism, and summer but also of deceit and warning.",
    info:
      "Yellow is the epitome of joy, happiness, cheerfulness, optimism—you name it. Anything happy is almost always yellow. The wavelength of yellow is particularly long, making it have one of the most powerful psychological meanings, while also being the easiest color to visibly see.\n Whenever you need to lift someone's spirits, increase their confidence, or provide inspiration, use yellow. However, avoid using yellow too much because it's also known to make us more critical causing self esteem issues, fear, or anxiety. Find the right balance of yellow to motivate rather than bring others down.",
    key: "Creativity, Happiness, Warmth, Cheer.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(252,252,195,1) 0%, rgba(249,209,4,1) 100%)",
    },
  },
  violet: {
    name: "Violet",
    intro:
      "In color psychology, purple is a royal color. The color meaning for purple is connected to power, nobility, luxury, wisdom, and spirituality. But avoid using the color too much as it can cause feelings of frustration. Some perceive its overuse as arrogant.",
    info:
      "Purple is most commonly known for its imagination and spirituality. It possesses the energy and power of red, with the stability and reliability of blue, making it a perfect balance between the physical and spiritual. Purple is often used to show luxury, loyalty, courage, mystery, and magic.\n It's a very intriguing color as it soothes, but also presents space for mystery and new ideas. This is why creativity is most often associated with the color purple. When using purple, avoid using it too often as it can also cause too much introspection or distraction as thoughts begin to wonder.",
    key: "Royalty, Luxury, Spirituality, Ambition.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(191,148,247,1) 0%, rgba(106,4,249,1) 100%)",
    },
  },
  brown: {
    name: "Brown",
    intro:
      "Brown is an earthy color. After all, it’s the color of earth, wood and stone. So naturally, color psychology highlights that the color meaning for brown relates to comfort, security and a down to earth nature.",
    info:
      "Brown, while maybe not the most visual stimulating color, is a great sign of structure, security, and protection. Whether it's family, friends, and material possessions, brown offers constant support. It's also a very serious, down to earth color you can use where black might be too intense. The downfall to brown is that it's the most safe color and can seem reserved, scheduled, and boring. Overall, use it when necessary, but don't depend on it too heavily.",
    key: "Dependable, Rugged, Trustworthy, Simple.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(238,151,84,1) 0%, rgba(145,86,8,1) 100%)",
    },
  },
  orange: {
    name: "Orange",
    intro:
      "In color psychology, orange represents creativity, adventure, enthusiasm, success, and balance. The color orange adds a bit of fun to any picture, website, or marketing material it’s on.",
    info:
      "Orange has a very interesting psychological meaning as it combines red's power and energy with yellow's friendliness and fun. The mix makes orange a good representation of physical comfort in our warmth, food, and shelter.\n Orange is also known to be a color of motivation, lends a positive attitude, and general enthusiasm for life. Overall, orange is great for bringing comfort in tough times, and creating a sense of fun or freedom in your visuals.",
    key: "Confidence, Success, Bravery, Sociability.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(245,199,153,1) 0%, rgba(252,123,6,1) 100%)",
    },
  },
  pink: {
    name: "Pink",
    intro:
      "Pink is a popular color for brands that primarily serve a female audience. In color psychology, pink’s color meaning revolves around femininity, playfulness and unconditional love.",
    info:
      "Pink is a softer, less intense version of red that creates a sense of compassion and unconditional love. While it's a very physical color, it soothes rather than stimulates, making it a perfect color for caring, understanding, and nurturing those in need.\n Pink is a sign of hope. It is also known to be very romantic as it shows empathy and sensitivity. If too much pink is used, it can be very draining, show a lack of power, and even immature. Overall, pink can be a great counter-option to the color red when used appropriately.",
    key: "Compassion, Sincerity, Sophistication, Sweet.",
    style: {
      backgroundColor:
        "linear-gradient(90deg, rgba(244,153,245,1) 0%, rgba(252,6,102,1) 100%)",
    },
  },
};

module.exports.colorData = colorData;
