function showScene(sceneId) {
    // 隐藏所有场景
    let scenes = document.querySelectorAll('.scene');
    scenes.forEach(scene => {
        scene.style.display = 'none';
    });

    // 显示目标场景
    let targetScene = document.getElementById(sceneId);
    if (targetScene) {
        targetScene.style.display = 'block';
    } else {
        console.error("Scene not found:", sceneId); // 方便调试
    }
}

// 初始显示第一个场景 (id="start")
showScene('scene-container');
