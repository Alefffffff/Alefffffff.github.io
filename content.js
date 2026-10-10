// Shared project data: edit media and English copy here; Chinese translations live in i18n.js.
const portfolio = {
  "projects": [
    {
      "title": "autoTA",
      "subtitle": "An automated workflow for game art",
      "tags": [
        "AI",
        "Blender",
        "Asset pipeline"
      ],
      "comparison": [
        {
          "label": "Before",
          "video": {
            "provider": "local",
            "src": "assets/videos/autota-before.mp4"
          }
        },
        {
          "label": "After",
          "video": {
            "provider": "local",
            "src": "assets/videos/autota-after.mp4"
          }
        }
      ],
      "description": "A fully automated AI workflow for game art assets, translating natural-language requirements into asset search, AI generation, Blender processing and engine delivery. Supports 2D/3D asset creation, PBR materials, rigging, animation generation and model optimization, automating the complete pipeline from generation and repair to engine import.",
      "bodyLink": "https://github.com/qiulinfan/autoTA/tree/main",
      "bodyLinkLabel": "View autoTA on GitHub",
      "detail": "",
      "images": []
    },
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
      "description": "A short game prototype made as a two-week class project. My focus was the visual pipeline, from asset creation to real-time gameplay in Unity.",
      "detail": "I contributed scene and character modeling, character rigging and animation, level design, and animation controller setup. The project brought art, animation, and game systems together in a playable environment.",
      "source": "https://www.artstation.com/artwork/Zl8QOm",
      "link": "https://eecs298.com/student_data/alefliu/Classroom%20Loop/builds/2025_12_09_03_47_46/index.html",
      "linkLabel": "Play the game",
      "images": [
        "assets/art-06.webp",
        "assets/art-07.webp"
      ],
      "bottomLink": "https://youtu.be/ULb4oJRbtCw?si=X1e7Y3rYWuOyOOlA",
      "bottomLinkLabel": "Gameplay Video"
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
      "description": "A team game prototype created in three days for Global Game Jam 2026. I worked across concept art, 3D modeling, animation, and in-engine implementation.",
      "detail": "My responsibilities included concept art for characters, environments, and props; 3D modeling and animation; asset import and lighting in Unity. I also optimized models and scenes through high-to-low poly baking and polygon reduction.",
      "source": "https://www.artstation.com/artwork/6LYqP0",
      "images": [
        "assets/art-01.webp",
        "assets/art-02.webp"
      ],
      "primaryGifs": [
        {
          "src": "assets/Young1Idle-cropped.gif",
          "label": "Young1 Idle"
        },
        {
          "src": "assets/Young3Idle-cropped.gif",
          "label": "Young3 Idle"
        },
        {
          "src": "assets/Youth1Idle-cropped.gif",
          "label": "Youth1 Idle"
        }
      ],
      "galleryLayout": "dreamweaver"
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
      "description": "Recreated the 1986 NES game The Legend of Zelda and added custom puzzle levels. Completed all scripting, level design, scene assembly, 2D art asset generation, and audio setup.",
      "detail": "",
      "images": [
        "assets/zelda-completion.png"
      ],
      "detailVideo": {
        "provider": "local",
        "src": "assets/videos/zelda.mp4"
      },
      "game": "assets/zelda-game.html",
      "detailByLanguage": {
        "en": "Building on this foundation, we created **Inverted Maze**, a custom dungeon where ladders let players walk on walls while ordinary floors become barriers. Players push boxes onto gravity buttons to rotate entire rooms 180 degrees, causing weights to fall and reveal new passages. These mechanics challenge players to rethink familiar spaces and plan how each action changes the available routes.\n\nI developed behavior scripts for enemies including Stalfos and Keese, along with shared enemy animation, damage feedback, and audio systems. I designed most of Inverted Maze’s levels and gameplay mechanics, combining wall traversal, box pushing, room rotation, and falling weights into connected puzzles. I also hand-drew some of the art assets and worked on gameplay UI, screen shake, and audiovisual feedback to make the new mechanics easier to understand.\n\n**Team:** Yuyang (Alef) Liu and Mike Xiangyu Cai",
        "zh": ""
      }
    }
  ],
  "artworks": [
    {
      "title": "Jade Mountain Shader",
      "subtitle": "Translucent jade with flowing highlights",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": {
        "provider": "local",
        "src": "assets/videos/jade.mp4"
      },
      "detailVideo": {
        "provider": "local",
        "src": "assets/videos/jade-adjustment.mp4"
      },
      "detailVideoTitle": "Jade Mountain Shader Adjustment",
      "detail": "",
      "description": "Uses a thickness mask and backlighting response to capture the translucency of jade. An inner luminous core, cloud-like textures, and surface lighting combine to create depth within the material. A flow map drives fine sparkles to produce a slowly drifting sheen."
    },
    {
      "title": "Cloth Glitter Shader",
      "subtitle": "View-dependent sparkle in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": {
        "provider": "local",
        "src": "assets/videos/cloth.mp4"
      },
      "description": "Generates random sparkles of varying sizes and brightness across a fabric surface. The relationship between microfacet orientation and viewing angle makes the sparkles appear and disappear as the view changes. Suitable for effects such as sequined clothing and shimmering water.",
      "detail": "",
      "poster": "assets/cover-02.jpg",
      "detailVideo": {
        "provider": "local",
        "src": "assets/videos/cloth-adjustment.mp4"
      },
      "detailVideoTitle": "Cloth Glitter Shader Adjustment"
    },
    {
      "title": "Parallax Plane Shader",
      "subtitle": "Starfield parallax in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": {
        "provider": "local",
        "src": "assets/videos/parallax.mp4"
      },
      "description": "Combines nebulae, twinkling stars, and rings of flowing light on the material surface. Object-space parallax shifts the starfield relative to the viewing angle. Stars twinkle at different phases while three rotating star rings add layers of depth. Suitable for umbrella canopies, mirrors, jade, and similar effects.",
      "detail": "",
      "detailVideo": {
        "provider": "local",
        "src": "assets/videos/parallax-adjustment.mp4"
      },
      "detailVideoTitle": "Parallax Plane Shader Adjustment"
    },
    {
      "title": "Skin Ooze Shader",
      "subtitle": "Animated ink distortion in Unity URP",
      "tags": [
        "Unity URP",
        "HLSL",
        "Shaders"
      ],
      "video": {
        "provider": "local",
        "src": "assets/videos/skin.mp4"
      },
      "description": "Distortion textures perturb color and normals separately to create the flow of a viscous surface. A shape mask constrains the flow and keeps the effect region stable. Dynamic dissolve textures make the ink-like effect appear and fade more naturally. Suitable for tattoos, venom, and similar effects.",
      "detail": "",
      "detailVideo": {
        "provider": "local",
        "src": "assets/videos/skin-adjustment.mp4"
      },
      "detailVideoTitle": "Skin Ooze Shader Adjustment"
    },
    {
      "title": "Three-Hit Combo",
      "subtitle": "Combat animation & parry system",
      "tags": [
        "Unity",
        "Blender",
        "Technical animation"
      ],
      "video": {
        "provider": "local",
        "src": "assets/videos/combo.mp4"
      },
      "description": "A third-person combat prototype exploring responsive animation transitions, combo timing, and combat feedback. I implemented the movement, combat, enemy behavior, and animation integration.",
      "detail": "Input buffering and frame-based combo windows connect three attacks, each with its own recovery animation. The final hit adds knockback; sprinting attacks use a heavy strike. A release-timed parry rewards matching the enemy’ warning window. Hit stop, camera shake, color flashes, audio, and knockback make each interaction readable. Source animations were downloaded from Mixamo and edited in Blender.",
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
      "images": [
        "assets/art-09.webp",
        "assets/art-10.webp",
        "assets/art-11.webp"
      ],
      "primaryGifs": [
        {
          "src": "assets/monster1-cropped.gif",
          "label": "Monster 1"
        },
        {
          "src": "assets/monster2-cropped.gif",
          "label": "Monster 2"
        },
        {
          "src": "assets/monster3-cropped.gif",
          "label": "Monster 3"
        }
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
      "video": {
        "provider": "local",
        "src": "assets/videos/metahuman.mp4"
      },
      "description": "From a photogrammetry scan of my own face to a real-time MetaHuman character in Unreal Engine 5.",
      "detail": "This pipeline explores mesh cleanup, identity solving, rigging, and performance-driven setup to bring a facial scan into a real-time character workflow.",
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
      "description": "",
      "detail": "",
      "images": [
        "assets/art-14.webp",
        "assets/art-15.webp",
        "assets/art-16.webp",
        "assets/art-17.webp"
      ]
    }
  ]
};
