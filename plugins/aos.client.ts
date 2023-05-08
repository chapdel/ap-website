import { defineNuxtPlugin } from '#app'
import AOS from 'aos';
import 'aos/dist/aos.css';

export default defineNuxtPlugin((nuxtApp) => {
    if (typeof window !== 'undefined') {
        nuxtApp.AOS = AOS.init({
            once: false,
            duration: 600,
            easing: 'ease-in-out-cubic',
        });
    }
});