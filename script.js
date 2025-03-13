document.addEventListener('DOMContentLoaded', () => {
    // Animation des images au survol (ancienne méthode)
    const projets = document.querySelectorAll('.carte-projet');
    
    // Effet de particules pour le titre principal
    creerParticules();
    
    // Configuration du bandeau défilant
    const bandeDefilante = document.querySelector('.bande-defilante');
    
    // Créer un conteneur pour l'animation
    const conteneur = document.createElement('div');
    conteneur.className = 'bande-defilante-conteneur';
    
    // Déplacer le contenu du bandeau dans le conteneur
    conteneur.innerHTML = bandeDefilante.innerHTML;
    bandeDefilante.innerHTML = '';
    
    // Créer un clone pour l'effet continu
    const clone = conteneur.cloneNode(true);
    
    // Ajouter les éléments au DOM
    bandeDefilante.appendChild(conteneur);
    bandeDefilante.appendChild(clone);
    
    // Ajouter des effets d'interaction aux étiquettes de progression
    const etiquettes = document.querySelectorAll('.etiquette');
    etiquettes.forEach(etiquette => {
        etiquette.addEventListener('mouseover', () => {
            etiquette.style.animation = 'pulse 0.8s infinite';
        });
        
        etiquette.addEventListener('mouseout', () => {
            etiquette.style.animation = '';
        });
    });
});

// Fonction pour créer des particules autour du titre principal
function creerParticules() {
    const titre = document.querySelector('.titre-principal');
    const conteneur = document.querySelector('.conteneur');
    
    if (!titre || !conteneur) return;
    
    const zoneParticules = document.createElement('div');
    zoneParticules.className = 'zone-particules';
    zoneParticules.style.position = 'absolute';
    zoneParticules.style.top = '0';
    zoneParticules.style.left = '0';
    zoneParticules.style.width = '100%';
    zoneParticules.style.height = '300px';
    zoneParticules.style.pointerEvents = 'none';
    zoneParticules.style.zIndex = '1';
    conteneur.insertBefore(zoneParticules, titre);
    
    const nombreParticules = 20;
    
    for (let i = 0; i < nombreParticules; i++) {
        const particule = document.createElement('div');
        particule.className = 'particule';
        particule.style.position = 'absolute';
        particule.style.width = Math.random() * 5 + 2 + 'px';
        particule.style.height = particule.style.width;
        particule.style.background = `rgba(${Math.random() * 100 + 155}, ${Math.random() * 200 + 55}, 255, ${Math.random() * 0.4 + 0.1})`;
        particule.style.borderRadius = '50%';
        particule.style.pointerEvents = 'none';
        
        // Position aléatoire autour du titre
        const posX = Math.random() * 80 + 10; // 10% à 90% de la largeur
        const posY = Math.random() * 200 + 20; // Distribuer verticalement
        particule.style.left = posX + '%';
        particule.style.top = posY + 'px';
        
        // Animation personnalisée pour chaque particule
        particule.style.animation = `flotter ${Math.random() * 10 + 10}s infinite ease-in-out`;
        
        // Créer une animation keyframe unique
        const style = document.createElement('style');
        const delay = Math.random() * 5;
        const translateY = Math.random() * 50 - 25;
        
        style.textContent = `
            @keyframes flotter {
                0% { transform: translate(0, 0) rotate(0deg); opacity: ${Math.random() * 0.5 + 0.2}; }
                50% { transform: translate(${Math.random() * 40 - 20}px, ${translateY}px) rotate(${Math.random() * 180}deg); opacity: ${Math.random() * 0.8 + 0.2}; }
                100% { transform: translate(0, 0) rotate(0deg); opacity: ${Math.random() * 0.5 + 0.2}; }
            }
        `;
        
        document.head.appendChild(style);
        particule.style.animationDelay = delay + 's';
        
        zoneParticules.appendChild(particule);
    }
}