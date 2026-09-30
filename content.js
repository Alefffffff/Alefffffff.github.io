// Shared project data: edit media and English copy here; Chinese translations live in i18n.js.
const portfolio = {
  "projects": [
    {
      "title": "The Big City",
      "subtitle": "Lost and Found in XR",
      "tags": [
        "Unreal Engine",
        "XR",
        "Virtual production"
      ],
      "description": "A cross-disciplinary FEAST project exploring reparative preservation through XR and virtual production, honoring uncredited Black actors in the lost 1920s film The Big City.",
      "detail": "As part of the Visual Design team, I contributed to environment design, 3D modeling, Blueprint and Niagara systems, motion capture and MetaHuman pipelines, and virtual production setup.",
      "source": "https://www.artstation.com/artwork/OvAqPw",
      "link": "https://lost-and-found-in-xr.webflow.io",
      "linkLabel": "Project website",
      "images": [
        "assets/art-03.webp",
        "assets/art-04.webp",
        "assets/art-05.webp"
      ]
    },
    {
      "title": "Classroom Loop",
      "subtitle": "A technical art case study",
      "tags": [
        "Unity",
        "Animation",
        "Level design"
      ],
      "video": "ULb4oJRbtCw",
      "description": "A short game prototype made as a two-week class project. My focus was the visual pipeline, from asset creation to real-time gameplay in Unity.",
      "detail": "I contributed scene and character modeling, character rigging and animation, level design, and animation controller setup. The project brought art, animation, and game systems together in a playable environment.",
      "source": "https://www.artstation.com/artwork/Zl8QOm",
      "link": "https://eecs298.com/student_data/alefliu/Classroom%20Loop/builds/2025_12_09_03_47_46/index.html",
      "linkLabel": "Play the game",
      "images": [
        "assets/art-06.webp",
        "assets/art-07.webp"
      ]
    },
    {
      "title": "Dreamweaver",
      "bodyLink": "https://bluesamoyed77.itch.io/dreamweaver",
      "bodyLinkLabel": "Play Dreamweaver on itch.io",
      "subtitle": "Global Game Jam 2026",
      "tags": [
        "Unity",
        "Blender",
        "Game art"
      ],
      "video": "2hq-1E8xt5s",
      "description": "A team game prototype created in three days for Global Game Jam 2026. I worked across concept art, 3D modeling, animation, and in-engine implementation.",
      "detail": "My responsibilities included concept art for characters, environments, and props; 3D modeling and animation; asset import and lighting in Unity. I also optimized models and scenes through high-to-low poly baking and polygon reduction.",
      "source": "https://www.artstation.com/artwork/6LYqP0",
      "images": [
        "assets/art-01.webp",
        "assets/art-02.webp"
      ]
    },
    {
      "title": "The Legend of Zelda Recreation | Inverted Maze",
      "subtitle": "Walls become paths. Familiar rooms become new puzzles.",
      "tags": [
        "Unity",
        "C#",
        "EECS 494",
        "Level design"
      ],
      "description": "This student project recreates the core dungeon experience of the original *The Legend of Zelda* using Unity and C#, including combat, enemy behavior, and room-based exploration.",
      "detail": "Building on this foundation, we created **Inverted Maze**, a custom dungeon where ladders let players walk on walls while ordinary floors become barriers. Players push boxes onto gravity buttons to rotate entire rooms 180 degrees, causing weights to fall and reveal new passages. These mechanics challenge players to rethink familiar spaces and plan how each action changes the available routes.\n\nI developed behavior scripts for enemies including Stalfos and Keese, along with shared enemy animation, damage feedback, and audio systems. I designed most of Inverted Maze’s levels and gameplay mechanics, combining wall traversal, box pushing, room rotation, and falling weights into connected puzzles. I also hand-drew some of the art assets and worked on gameplay UI, screen shake, and audiovisual feedback to make the new mechanics easier to understand.\n\n**Team:** Yuyang (Alef) Liu and Mike Xiangyu Cai",
      "images": [
        "assets/zelda-01.png",
        "assets/zelda-02.png",
        "assets/zelda-03.png",
        "assets/zelda-04.png"
      ],
      "detailVideo": "nAHYC61vze8",
      "game": "assets/zelda-game.html"
    }
  ],
  "artworks": [
    {
      "title": "Cloth Glitter Shader",
      "subtitle": "View-dependent sparkle in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": "riyQ_1wbNHE",
      "description": "A real-time cloth shader exploring sparkle that changes with the viewing angle.",
      "detail": "A material study in Unity URP focused on view-dependent glitter. Watch the demonstration to see the sparkle in motion.",
      "source": "https://www.artstation.com/artwork/dLKX5w",
      "poster": "assets/cover-02.jpg"
    },
    {
      "title": "Skin Ooze Shader",
      "subtitle": "Animated ink distortion in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": "NoExoDtQWhE",
      "description": "A real-time shader study exploring animated ink distortion on a surface.",
      "detail": "This Unity URP material study explores an animated ooze effect. The video demonstrates how the distortion changes over time.",
      "source": "https://www.artstation.com/artwork/dLKX5w"
    },
    {
      "title": "Parallax Plane Shader",
      "subtitle": "Starfield parallax in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": "v9BQNdNdn4g",
      "description": "A real-time shader study exploring starfield parallax on a flat surface.",
      "detail": "This Unity URP material study uses parallax to suggest depth on a plane. Watch the video to see the starfield effect in motion.",
      "source": "https://www.artstation.com/artwork/dLKX5w"
    },
    {
      "title": "Three-Hit Combo",
      "subtitle": "Combat animation & parry system",
      "tags": [
        "Unity",
        "Blender",
        "Technical animation"
      ],
      "video": "l88EfM_S0OE",
      "description": "A third-person combat prototype exploring responsive animation transitions, combo timing, and combat feedback. I implemented the movement, combat, enemy behavior, and animation integration.",
      "detail": "Input buffering and frame-based combo windows connect three attacks, each with its own recovery animation. The final hit adds knockback; sprinting attacks use a heavy strike. A release-timed parry rewards matching the enemy’ warning window. Hit stop, camera shake, color flashes, audio, and knockback make each interaction readable. Source animations were downloaded from Mixamo and edited in Blender.",
      "source": "https://www.artstation.com/artwork/5evDG1",
      "images": [
        "assets/art-08.jpg"
      ],
      "poster": "assets/cover-01.jpg"
    },
    {
      "title": "Monster - 3D Modeling",
      "subtitle": "Three characters for Dreamweaver",
      "tags": [
        "Blender",
        "3D art",
        "Character design"
      ],
      "description": "3D monster models created in Blender for our India-themed Global Game Jam 2026 game, Dreamweaver.",
      "detail": "A collection of character models, with additional views from the modeling process.",
      "source": "https://www.artstation.com/artwork/JrxbNz",
      "images": [
        "assets/art-09.webp",
        "assets/art-10.webp",
        "assets/art-11.webp"
      ]
    },
    {
      "title": "Me in UE",
      "subtitle": "Photogrammetry to MetaHuman",
      "tags": [
        "Unreal Engine 5",
        "Photogrammetry",
        "Pipeline"
      ],
      "video": "w0vjqHdFMvI",
      "description": "From a photogrammetry scan of my own face to a real-time MetaHuman character in Unreal Engine 5.",
      "detail": "This pipeline explores mesh cleanup, identity solving, rigging, and performance-driven setup to bring a facial scan into a real-time character workflow.",
      "source": "https://www.artstation.com/artwork/AZOG6V",
      "images": [
        "assets/art-12.webp",
        "assets/art-13.webp"
      ]
    }
  ],
  "other": [
    {
      "title": "Illustrations",
      "subtitle": "Drawings, fan art & comics",
      "tags": [
        "Photoshop",
        "Procreate",
        "2D art"
      ],
      "description": "A selection of my illustrations, including fan art and comics.",
      "detail": "More illustrations from my personal collection.",
      "source": "https://www.artstation.com/artwork/6LWLlw",
      "images": [
        "assets/art-14.webp",
        "assets/art-15.webp",
        "assets/art-16.webp",
        "assets/art-17.webp"
      ]
    }
  ]
};
