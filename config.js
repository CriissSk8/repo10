// Configuración para almacenamiento en la nube
// Usa JSONBin.io (gratuito) para almacenar datos de visitantes

const CONFIG = {
    // Crea tu API key gratis en: https://jsonbin.io/
    // 1. Ve a https://jsonbin.io/
    // 2. Regístrate gratis
    // 3. Copia tu API key
    // 4. Pégala aquí:
    JSONBIN_API_KEY: '$2a$10$s2Isg/KN8JgTdp02jDV.3evi1W941I/1fnHVN9zKSzxxCFwscdsqG',
    
    // Después de crear tu primera bin, pega el ID aquí:
    JSONBIN_BIN_ID: '692a96cfd0ea881f40074a0a',
    
    // Alternativamente, usa un webhook de Discord, Telegram, o email
    // Para Discord: Crea un webhook en tu servidor y pega la URL aquí
    DISCORD_WEBHOOK: '',
    
    // Para recibir por email (usando FormSubmit.co - gratis)
    
    // Método de almacenamiento: 'jsonbin', 'discord', 'email', 'local'
    STORAGE_METHOD: 'jsonbin' // Cambia a 'jsonbin', 'discord' o 'email' cuando configures
};

// No edites esto
if (typeof module !== 'undefined' && module.exports) {
    module.exports = CONFIG;
}
