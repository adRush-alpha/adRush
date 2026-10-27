importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-app-compat.js');
importScripts('https://www.gstatic.com/firebasejs/10.14.1/firebase-messaging-compat.js');
firebase.initializeApp({apiKey:"AIzaSyDlQddOV0Pr8llE3Rg6aX9vzCWw2XvFvFQ",authDomain:"adrush-825e9.firebaseapp.com",projectId:"adrush-825e9",storageBucket:"adrush-825e9.firebasestorage.app",messagingSenderId:"494182744553",appId:"1:494182744553:web:ba06748a4308b630b74b78",measurementId:"G-W64SZE8F9K"});
const messaging=firebase.messaging();
// Messages with a "notification" part are shown by the browser itself. This shows data-only messages.
messaging.onBackgroundMessage(p=>{if(p.notification)return;const d=p.data||{};self.registration.showNotification(d.title||'adRush',{body:d.body||'',icon:'icon-192.png'})});
self.addEventListener('notificationclick',e=>{e.notification.close();e.waitUntil(clients.openWindow(self.registration.scope))});
