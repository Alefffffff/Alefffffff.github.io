// English copy lives in content.js / app.js. Add its Chinese equivalent here.
// Unlisted strings (including product and project names) keep their original text.
const chinese = {
 'This student project recreates the core dungeon experience of the original *The Legend of Zelda* using Unity and C#, including combat, enemy behavior, and room-based exploration.':'这个学生项目使用 Unity 和 C# 重现了初代 *The Legend of Zelda* 的核心地牢体验，包括战斗、敌人行为和以房间为单位的探索。',
 'Building on this foundation, we created **Inverted Maze**, a custom dungeon where ladders let players walk on walls while ordinary floors become barriers. Players push boxes onto gravity buttons to rotate entire rooms 180 degrees, causing weights to fall and reveal new passages. These mechanics challenge players to rethink familiar spaces and plan how each action changes the available routes.':'在此基础上，我们创作了自定义地牢 **Inverted Maze**：玩家可以通过梯子在墙壁上行走，而普通地板则成为障碍。玩家将箱子推到重力按钮上，使整个房间旋转 180 度，让重物落下并打开新的通道。这些机制要求玩家重新思考熟悉的空间，并规划每一步行动将如何改变可通行的路线。',
 'I developed behavior scripts for enemies including Stalfos and Keese, along with shared enemy animation, damage feedback, and audio systems. I designed most of Inverted Maze’s levels and gameplay mechanics, combining wall traversal, box pushing, room rotation, and falling weights into connected puzzles. I also hand-drew some of the art assets and worked on gameplay UI, screen shake, and audiovisual feedback to make the new mechanics easier to understand.':'我开发了 Stalfos、Keese 等敌人的行为脚本，以及共用的敌人动画、受伤反馈和音频系统。我设计了 Inverted Maze 的大部分关卡与玩法机制，将墙面行走、推箱子、房间旋转和重物下落组合成相互关联的谜题。我还手绘了部分美术资源，并参与制作游戏 UI、屏幕震动和视听反馈，让玩家更容易理解这些新机制。',
 '**Team:** Yuyang (Alef) Liu and Mike Xiangyu Cai':'**团队：** 刘寓旸（Alef）与 Mike Xiangyu Cai',
 'Walls become paths. Familiar rooms become new puzzles.':'墙壁成为道路，熟悉的房间化作全新的谜题。',
 'This student project recreates the core dungeon experience of the original *The Legend of Zelda* in Unity and C#, exploring its combat, enemy behavior, and room-based level design.':'这个学生项目使用 Unity 和 C# 重现了初代 *The Legend of Zelda* 的核心地牢体验，探索其战斗系统、敌人行为与以房间为单位的关卡设计。',
 'Building on this foundation, we created **Inverted Maze**, a custom dungeon where ladders let players walk on walls while ordinary floors become barriers. Players push boxes onto gravity buttons to rotate entire rooms 180 degrees, causing weights to fall and reveal new passages. Each puzzle asks players to rethink the same space from a different perspective.':'在此基础上，我们创作了自定义地牢 **Inverted Maze**：玩家可以通过梯子在墙壁上行走，而普通地板则成为障碍。玩家将箱子推到重力按钮上，使整个房间旋转 180 度，让重物落下并打开新的通道。每个谜题都鼓励玩家从不同视角重新理解同一个空间。',
 'My contributions included enemy behavior and animation, gameplay UI, custom puzzle layouts, and visual and audio feedback for room rotation. Working with my teammate, I helped connect these mechanics into a playable dungeon experience.':'我负责的内容包括敌人行为与动画、游戏 UI、自定义谜题布局，以及房间旋转时的视觉和音频反馈。我与队友合作，将这些机制整合成可游玩的地牢体验。',
 'Screenshots from The Legend of Zelda Recreation | Inverted Maze.':'The Legend of Zelda Recreation | Inverted Maze 项目截图。',
 'View-dependent sparkle in Unity URP':'Unity URP 中随视角变化的闪光',
 'A real-time cloth shader exploring sparkle that changes with the viewing angle.':'一个实时布料着色器，探索随观察角度变化的闪光效果。',
 'A material study in Unity URP focused on view-dependent glitter. Watch the demonstration to see the sparkle in motion.':'一项 Unity URP 材质研究，重点探索与视角相关的闪光。视频展示了闪光的动态效果。',
 'Animated ink distortion in Unity URP':'Unity URP 动态墨迹扭曲',
 'A real-time shader study exploring animated ink distortion on a surface.':'一项实时着色器研究，探索表面上的动态墨迹扭曲效果。',
 'This Unity URP material study explores an animated ooze effect. The video demonstrates how the distortion changes over time.':'这项 Unity URP 材质研究探索了动态流动效果，视频展示了扭曲随时间变化的过程。',
 'Starfield parallax in Unity URP':'Unity URP 星空视差',
 'A real-time shader study exploring starfield parallax on a flat surface.':'一项实时着色器研究，探索平面上的星空视差效果。',
 'This Unity URP material study uses parallax to suggest depth on a plane. Watch the video to see the starfield effect in motion.':'这项 Unity URP 材质研究通过视差在平面上营造纵深感，视频展示了星空的动态效果。',
 'Projects':'游戏项目','Artworks':'艺术作品','Other':'其他作品','About':'关于我','About me':'关于我',
 'ALEF LIU':'刘寓旸','Alef Liu, home':'刘寓旸，首页','Yuyang (Alef) Liu · Portfolio':'刘寓旸 · 作品集',
 'Skip to content':'跳转到正文','Main navigation':'主导航','About Alef':'关于刘寓旸',
 'Self introduction, scroll for more':'自我介绍，滚动查看更多',
 'a little art, a little engineering.':'一点艺术，一点技术。',"Hello, I'm":'你好，我是',
 'Yuyang Liu.':'刘寓旸。','Call me Alef.':'也可以叫我 Alef。',
 'Game technical artist & 3D artist.':'游戏技术美术与 3D 艺术家。',
 'I work between art and game development — creating real-time shaders, building animation systems, and bringing 3D worlds to life.':'我的创作连接艺术与游戏开发：编写实时着色器、搭建动画系统，让 3D 世界鲜活起来。',
 'Based in Ann Arbor, United States.':'现居美国安娜堡。','A little about my work':'关于我的创作',
 'My projects span games, XR, character art, and real-time graphics. I enjoy connecting the visual side of a project with the systems that make it work.':'我的项目涵盖游戏、XR、角色美术与实时图形。我喜欢将项目的视觉表现与支撑它的技术系统结合起来。',
 'Outside of 3D, I draw illustrations, fan art, and comics.':'除了 3D 创作，我也绘制插画、同人作品和漫画。',
 'Email: lyy20031122@gmail.com':'邮箱：lyy20031122@gmail.com','Phone: (734)-489-4327':'电话：(734)-489-4327',
 'Find my work on ArtStation':'在 ArtStation 查看我的作品','Download Resume':'下载简历',
 'Explore my projects':'浏览我的项目','Scroll inside to read more':'在方框内滚动查看更多',
 'Games & interactive experiences. From short game jams to collaborative XR worlds.':'游戏与交互体验：从短期 Game Jam 到团队协作的 XR 世界。',
 'Real-time materials, animation systems, and the making of characters.':'实时材质、动画系统与角色创作。',
 'Illustrations, fan art, and stories on a different canvas.':'插画、同人作品，以及另一种画布上的故事。',
 'More...':'更多…','Less...':'收起…','Watch on YouTube':'在 YouTube 观看','View on ArtStation':'在 ArtStation 查看',
 'Project website':'项目网站','Play the game':'试玩游戏','Play Dreamweaver on itch.io':'在 itch.io 试玩 Dreamweaver',
 'Gameplay preview coming soon':'游戏演示即将上线',
 'Lost and Found in XR':'XR 中的失落与重现','Virtual production':'虚拟制作',
 'A cross-disciplinary FEAST project exploring reparative preservation through XR and virtual production, honoring uncredited Black actors in the lost 1920s film The Big City.':'一个跨学科的 FEAST 项目，通过 XR 与虚拟制作探索修复性文化保存，致敬 20 世纪 20 年代遗失电影 The Big City 中未获署名的黑人演员。',
 'As part of the Visual Design team, I contributed to environment design, 3D modeling, Blueprint and Niagara systems, motion capture and MetaHuman pipelines, and virtual production setup.':'作为视觉设计团队的一员，我参与了场景设计、3D 建模、Blueprint 与 Niagara 系统、动作捕捉与 MetaHuman 工作流程，以及虚拟制作环境的搭建。',
 'A technical art case study':'技术美术项目实践','Animation':'动画','Level design':'关卡设计',
 'A short game prototype made as a two-week class project. My focus was the visual pipeline, from asset creation to real-time gameplay in Unity.':'在两周课程项目中完成的短篇游戏原型。我主要负责视觉制作流程，从资源创作到 Unity 中的实时游戏呈现。',
 'I contributed scene and character modeling, character rigging and animation, level design, and animation controller setup. The project brought art, animation, and game systems together in a playable environment.':'我参与了场景与角色建模、角色绑定与动画、关卡设计及动画控制器配置，将美术、动画和游戏系统整合为可游玩的体验。',
 'Game art':'游戏美术',
 'A team game prototype created in three days for Global Game Jam 2026. I worked across concept art, 3D modeling, animation, and in-engine implementation.':'在 Global Game Jam 2026 期间，由团队在三天内完成的游戏原型。我负责概念设计、3D 建模、动画及引擎内实现。',
 'My responsibilities included concept art for characters, environments, and props; 3D modeling and animation; asset import and lighting in Unity. I also optimized models and scenes through high-to-low poly baking and polygon reduction.':'我的工作包括角色、场景和道具概念设计，3D 建模与动画，以及 Unity 中的资源导入和灯光设置。我还通过高低模烘焙和减面来优化模型与场景。',
 'EECS 494 · Game project':'EECS 494 · 游戏项目','Game development':'游戏开发','Course project':'课程项目',
 'A newly completed Zelda project for EECS 494.':'近期完成的 EECS 494 课程 Zelda 项目。',
 'Gameplay footage, project details, and a playable link will be added soon.':'游戏演示、项目详情与试玩链接即将补充。',
 'Combat animation & parry system':'战斗动画与弹反系统','Technical animation':'技术动画',
 'A third-person combat prototype exploring responsive animation transitions, combo timing, and combat feedback. I implemented the movement, combat, enemy behavior, and animation integration.':'一个第三人称战斗原型，探索灵敏的动画过渡、连击时机与战斗反馈。我实现了移动、战斗、敌人行为及动画整合。',
 'Input buffering and frame-based combo windows connect three attacks, each with its own recovery animation. The final hit adds knockback; sprinting attacks use a heavy strike. A release-timed parry rewards matching the enemy’ warning window. Hit stop, camera shake, color flashes, audio, and knockback make each interaction readable. Source animations were downloaded from Mixamo and edited in Blender.':'通过输入缓冲与按帧计算的连击窗口衔接三段攻击，每段攻击都有独立的收招动画。最后一击带有击退效果，冲刺攻击则使用重击。玩家在敌人预警窗口内适时松开按键即可触发弹反。顿帧、镜头震动、颜色闪烁、音效与击退共同强化战斗反馈。原始动画下载自 Mixamo，并在 Blender 中编辑。',
 'Material studies in Unity URP':'Unity URP 材质研究','Shaders':'着色器',
 'A collection of real-time shader studies exploring view-dependent sparkle, animated ink distortion, starfield parallax, and stylized water.':'一组实时着色器研究，探索随视角变化的闪光、动态墨迹扭曲、星空视差与风格化水面。',
 'The collection includes Cloth Glitter, Skin Ooze, Star Umbrella, and Stylized Water. The demonstrations below show different material behaviors in real time.':'系列包括 Cloth Glitter、Skin Ooze、Star Umbrella 和 Stylized Water。下方演示展示了这些材质的实时效果。',
 'Three characters for Dreamweaver':'为 Dreamweaver 制作的三个角色','3D art':'3D 美术','Character design':'角色设计',
 '3D monster models created in Blender for our India-themed Global Game Jam 2026 game, Dreamweaver.':'为团队在 Global Game Jam 2026 中制作的印度主题游戏 Dreamweaver 创作的 3D 怪物模型，使用 Blender 制作。',
 'A collection of character models, with additional views from the modeling process.':'一组角色模型，以及建模过程中的更多视图。',
 'Photogrammetry to MetaHuman':'从摄影测量到 MetaHuman','Photogrammetry':'摄影测量','Pipeline':'制作流程',
 'From a photogrammetry scan of my own face to a real-time MetaHuman character in Unreal Engine 5.':'从我本人面部的摄影测量扫描出发，在 Unreal Engine 5 中制作实时 MetaHuman 角色。',
 'This pipeline explores mesh cleanup, identity solving, rigging, and performance-driven setup to bring a facial scan into a real-time character workflow.':'这一流程探索了网格清理、身份解算、绑定与表演驱动设置，将面部扫描整合到实时角色制作流程中。',
 'Drawings, fan art & comics':'绘画、同人作品与漫画','2D art':'2D 美术',
 'A selection of my illustrations, including fan art and comics.':'精选插画作品，包括同人创作与漫画。','More illustrations from my personal collection.':'更多个人插画作品。'
};
let language = 'en';
try { if (localStorage.getItem('alef-language') === 'zh') language = 'zh'; } catch {}
function translate(text) {
 if (language === 'en') return text;
 if (chinese[text]) return chinese[text];
 if (/^(Projects|Artworks|Other)\.$/.test(text)) return chinese[text.slice(0,-1)] + '。';
 if (text.startsWith('Selected work / ')) return text.replace('Selected work / ', '精选作品 / ');
 if (text.startsWith('Play ')) return '播放 ' + text.slice(5);
 if (text.startsWith('More about ')) return '了解更多：' + text.slice(11);
 return text.replace(' — additional view',' — 更多视图').replace(' video cover',' 视频封面').replace(' — video demonstration',' — 视频演示');
}
const originalText = new WeakMap();
const originalAttributes = new WeakMap();
function localize(root) {
 const walker = document.createTreeWalker(root, NodeFilter.SHOW_TEXT);
 while (walker.nextNode()) {
  const node = walker.currentNode;
  if (node.parentElement.closest('script,style,.language-toggle')) continue;
  if (!originalText.has(node)) originalText.set(node,node.textContent);
  const source = originalText.get(node);
  node.textContent = source.replace(/\S(?:[\s\S]*\S)?/, text => translate(text));
 }
 root.querySelectorAll('[aria-label],img[alt]').forEach(el => {
  if (el.matches('.language-toggle')) return;
  if (!originalAttributes.has(el)) originalAttributes.set(el, {label:el.getAttribute('aria-label'),alt:el.getAttribute('alt')});
  const source=originalAttributes.get(el);
  if(source.label) el.setAttribute('aria-label',translate(source.label));
  if(source.alt) el.setAttribute('alt',translate(source.alt));
 });
}
