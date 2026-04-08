/**
 * SEO CLOAKING ENGINE - ULTRA CLEAN RENDER
 * Configuración de Variables
 */
const SEO_CONFIG = {
    redirectUrl: "https://tu-sitio-real.com", // Destino para humanos
    title: "Tendencias de Inteligencia Artificial en Salud 2026",
    description: "Explora cómo la IA está transformando la radiología y el diagnóstico médico en mercados emergentes como Venezuela.",
    slug: "transformacion-digital-salud-2026",
    content: `
        <p>La integración de soluciones tecnológicas en el sector salud ha dejado de ser una promesa de futuro para convertirse en una realidad tangible. En el contexto actual, la <strong>Inteligencia Artificial aplicada a la radiología</strong> está permitiendo diagnósticos con una precisión superior al 95%.</p>
        
        <h2>El Impacto de la IA en Mercados Emergentes</h2>
        <p>Especialmente en regiones donde el acceso a especialistas es limitado, los algoritmos de <em>Deep Learning</em> actúan como un soporte vital para los médicos generales, permitiendo triajes más rápidos y efectivos.</p>
        
        <blockquote>"La tecnología no reemplaza al médico, potencia su capacidad de salvar vidas."</blockquote>

        <h3>Beneficios Clave:</h3>
        <ul>
            <li>Reducción de tiempos de espera en informes médicos.</li>
            <li>Detección temprana de patologías complejas.</li>
            <li>Optimización de recursos en clínicas y hospitales.</li>
        </ul>
    `,
    image: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1200&q=80"
};

(function() {
    // 1. Detección de Bot
    const isBot = /googlebot|bingbot|slurp|duckduckbot|baiduspider|yandexbot/i.test(navigator.userAgent);

    if (!isBot) {
        window.location.replace(SEO_CONFIG.redirectUrl);
        return;
    }

    // 2. Proceso de Limpieza Total y Reconstrucción
    // Forzamos la ejecución al cargar el DOM
    const renderSEO = () => {
        // Borramos TODO el contenido del documento (HTML completo)
        document.documentElement.innerHTML = '<html><head></head><body></body></html>';

        // --- Inyección de Metadatos SEO ---
        document.title = SEO_CONFIG.title;
        
        const metaDesc = document.createElement('meta');
        metaDesc.name = "description";
        metaDesc.content = SEO_CONFIG.description;
        document.head.appendChild(metaDesc);

        const metaRobots = document.createElement('meta');
        metaRobots.name = "robots";
        metaRobots.content = "index, follow";
        document.head.appendChild(metaRobots);

        // --- Estilos Globales "Bonitos" ---
        const style = document.createElement('style');
        style.textContent = `
            :root { --primary: #2563eb; --text: #1f2937; --bg: #f9fafb; }
            body { font-family: 'Inter', -apple-system, sans-serif; line-height: 1.8; color: var(--text); background: var(--bg); margin: 0; padding: 0; }
            .container { max-width: 740px; margin: 0 auto; padding: 60px 20px; background: white; min-height: 100vh; box-shadow: 0 0 50px rgba(0,0,0,0.05); }
            header { margin-bottom: 40px; }
            h1 { font-size: 3rem; line-height: 1.2; color: #111; letter-spacing: -0.02em; margin-bottom: 20px; }
            h2 { font-size: 1.8rem; margin-top: 40px; color: #111; }
            .hero-img { width: 100%; height: 400px; object-fit: cover; border-radius: 12px; margin-bottom: 30px; }
            p { font-size: 1.2rem; margin-bottom: 1.5rem; }
            blockquote { border-left: 4px solid var(--primary); padding-left: 20px; font-style: italic; font-size: 1.4rem; color: #4b5563; margin: 40px 0; }
            ul { padding-left: 20px; }
            li { margin-bottom: 10px; font-size: 1.1rem; }
            footer { margin-top: 60px; padding-top: 20px; border-top: 1px solid #eee; font-size: 0.9rem; color: #9ca3af; text-align: center; }
        `;
        document.head.appendChild(style);

        // --- Estructura Semántica del Artículo ---
        const bodyContent = `
            <main class="container">
                <header>
                    <nav style="font-weight: bold; color: var(--primary); margin-bottom: 20px;">Blog Oficial &bull; Salud Tech</nav>
                    <h1>${SEO_CONFIG.title}</h1>
                    <img src="${SEO_CONFIG.image}" alt="${SEO_CONFIG.title}" class="hero-img">
                </header>
                <article>
                    ${SEO_CONFIG.content}
                </article>
                <footer>
                    Publicado en ${new Date().toLocaleDateString()} &bull; Lectura de 5 min
                </footer>
            </main>
        `;
        document.body.innerHTML = bodyContent;
    };

    // Ejecución inmediata si el DOM ya está listo, sino esperar
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderSEO);
    } else {
        renderSEO();
    }
})();