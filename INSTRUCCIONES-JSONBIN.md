# 📝 Instrucciones Paso a Paso - JSONBin.io

## ✅ Configuración Completa (5 minutos)

### Paso 1: Crear Cuenta en JSONBin

1. Ve a **https://jsonbin.io/**
2. Click en "Sign Up" (arriba derecha)
3. Regístrate con tu email (gratis, sin tarjeta)
4. Confirma tu email

### Paso 2: Crear API Key

1. Una vez dentro, ve al menú lateral
2. Click en **"API Keys"**
3. Click en **"Create Access Key"**
4. Dale un nombre: `visitor-tracker`
5. **COPIA LA API KEY** (se ve así: `$2b$10$abcd1234...`)
   - ⚠️ Guárdala en un lugar seguro, solo se muestra una vez

### Paso 3: Crear un Bin (Base de Datos)

1. En el menú lateral, click en **"Bins"**
2. Click en **"Create Bin"**
3. Borra todo el contenido y pega esto:
   ```json
   {
     "visitors": []
   }
   ```
4. Click en **"Create"** (botón verde)
5. **COPIA EL BIN ID** de la URL
   - La URL se verá así: `https://jsonbin.io/app/bins/675a1b2c3d4e5f6g7h8i`
   - El Bin ID es: `675a1b2c3d4e5f6g7h8i`

### Paso 4: Configurar el Proyecto

1. Abre el archivo **`config.js`** en tu editor
2. Reemplaza las líneas con tus datos:

```javascript
const CONFIG = {
    JSONBIN_API_KEY: '$2b$10$tu_api_key_completa_aqui',  // ← Pega tu API Key aquí
    JSONBIN_BIN_ID: '675a1b2c3d4e5f6g7h8i',              // ← Pega tu Bin ID aquí
    DISCORD_WEBHOOK: '',
    EMAIL_ENDPOINT: 'https://formsubmit.co/tu_email@ejemplo.com',
    STORAGE_METHOD: 'jsonbin'  // ← Asegúrate que diga 'jsonbin'
};
```

3. Guarda el archivo

### Paso 5: Probar la Configuración

1. Abre **`test-config.html`** en tu navegador
2. Deberías ver:
   - ✅ API Key configurada
   - ✅ Bin ID configurado
3. Click en **"Probar Conexión JSONBin"**
4. Debe decir: **"✅ Conexión exitosa con JSONBin!"**
5. Click en **"Enviar Datos de Prueba"**
6. Debe decir: **"✅ Datos de prueba enviados exitosamente!"**

### Paso 6: Subir a tu Servidor

1. Sube TODOS estos archivos a tu hosting:
   - `index.html`
   - `script.js`
   - `config.js`
   - `admin.html`
   - `admin.js`

2. Comparte el enlace de `index.html` con quien quieras rastrear

### Paso 7: Ver los Visitantes

1. Abre `admin.html` desde cualquier navegador
2. Ingresa la contraseña: **`admin123`**
3. Verás todos los visitantes que entraron a `index.html`

---

## 🔍 Verificar que Funciona

### Prueba Local:

1. Abre `index.html` en tu navegador
2. Espera 10 segundos
3. Abre la consola (F12)
4. Deberías ver: `✅ Datos enviados a JSONBin exitosamente!`
5. Abre `admin.html`
6. Ingresa contraseña: `admin123`
7. Deberías ver tu visita en la lista

### Prueba Remota:

1. Sube los archivos a tu servidor
2. Comparte el enlace con alguien
3. Cuando esa persona entre, espera 10 segundos
4. Abre `admin.html` desde TU navegador
5. Verás la visita de esa persona con su ubicación

---

## ❌ Solución de Problemas

### "❌ API Key NO configurada"
- Verifica que copiaste la API Key completa
- Debe empezar con `$2b$10$` o `$2a$10$`
- No debe decir `TU_API_KEY_AQUI`

### "❌ Bin ID NO configurado"
- Verifica que copiaste el Bin ID correcto
- Son solo números y letras, sin espacios
- No debe decir `TU_BIN_ID_AQUI`

### "❌ Error 401"
- Tu API Key es incorrecta
- Crea una nueva API Key en JSONBin

### "❌ Error 404"
- Tu Bin ID es incorrecto
- Verifica el ID en la URL de tu Bin

### "No veo visitantes en admin.html"
- Abre la consola (F12) en `index.html`
- Busca el mensaje: `✅ Datos enviados a JSONBin`
- Si no aparece, verifica `config.js`
- Asegúrate que `STORAGE_METHOD: 'jsonbin'`

### "CORS Error"
- JSONBin permite CORS por defecto
- Si ves este error, verifica tu API Key
- Intenta crear una nueva API Key

---

## 📊 Ver Datos en JSONBin

Puedes ver los datos directamente en JSONBin:

1. Ve a https://jsonbin.io/
2. Login con tu cuenta
3. Click en "Bins"
4. Click en tu Bin
5. Verás todos los visitantes en formato JSON

---

## 🔒 Seguridad

- **NO compartas tu API Key públicamente**
- **NO subas `config.js` a GitHub** (agrégalo a `.gitignore`)
- Cambia la contraseña del admin en `admin.js` línea 2
- JSONBin tiene límite de 10,000 requests/mes (gratis)

---

## 💡 Consejos

- Puedes crear múltiples Bins para diferentes proyectos
- Cada Bin tiene su propio ID
- Puedes ver estadísticas en tu dashboard de JSONBin
- Los datos se guardan permanentemente (no se borran)
- Puedes exportar los datos desde `admin.html`

---

## 🆘 ¿Aún no funciona?

1. Abre `test-config.html`
2. Toma captura de pantalla de los errores
3. Verifica que:
   - API Key esté correcta
   - Bin ID esté correcto
   - `STORAGE_METHOD: 'jsonbin'`
   - Todos los archivos estén en el servidor
