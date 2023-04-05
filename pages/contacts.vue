<template>
    <div class="px-4 space-y-6">
        <div class="max-w-screen-lg py-16 mx-auto rounded-lg">
            <h1 class="text-3xl lg:text-5xl">Nous Contacter</h1>
            <p class="max-w-lg text-lg text-gray-600">
                Prenez contact avec nous et discutons de votre projet.
            </p>
        </div>
        <div class="grid max-w-screen-lg grid-cols-1 mx-auto lg:grid-cols-2 gap-x-12 gap-y-6">
            <div class="max-w-lg">
                <form @submit.prevent="" class="grid grid-cols-1 gap-4">
                    <div>
                        <label for="" class="text-gray-600">Nom</label>
                        <input type="text"
                            class="block w-full p-4 text-gray-900 placeholder-gray-700 bg-gray-200 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Entreprise <span class="text-sm">(Optionel)</span></label>
                        <input type="email"
                            class="block w-full p-4 text-gray-900 placeholder-gray-700 bg-gray-200 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Email</label>
                        <input type="email"
                            class="block w-full p-4 text-gray-900 placeholder-gray-700 bg-gray-200 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none">
                    </div>

                    <div>
                        <label for="" class="text-gray-600">Télephone</label>
                        <input type="text"
                            class="block w-full p-4 text-gray-900 placeholder-gray-700 bg-gray-200 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Votre café</label>
                        <ul
                            class="items-center w-full text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg sm:flex dark:bg-gray-700 dark:border-gray-600 dark:text-white">
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="coffee-type-license" type="radio" value="" name="coffee-type"
                                        class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 ring-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="coffee-type-license"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Avec sucre </label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="coffee-type-without-sugar" type="radio" value="" name="coffee-type"
                                        class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 ring-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="coffee-type-without-sugar"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Sans sucre</label>
                                </div>
                            </li>
                            <li class="w-full border-b border-gray-200 sm:border-b-0 sm:border-r dark:border-gray-600">
                                <div class="flex items-center pl-3">
                                    <input id="coffee-type-tea" type="radio" value="the" name="coffee-type"
                                        class="w-4 h-4 text-gray-600 bg-gray-100 border-gray-300 ring-gray-600 focus:ring-gray-500 dark:focus:ring-gray-600 dark:ring-offset-gray-700 dark:focus:ring-offset-gray-700 focus:ring-2 dark:bg-gray-600 dark:border-gray-500">
                                    <label for="coffee-type-tea"
                                        class="w-full py-3 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Thé</label>
                                </div>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Message</label>
                        <textarea
                            class="block w-full p-4 text-gray-900 placeholder-gray-700 bg-gray-200 rounded-md outline-none ring-0 focus:ring-0 focus:outline-none"
                            rows="5"></textarea>
                    </div>
                    <div>
                        <button class="block w-full p-4 text-white rounded-md bg-black/95 hover:bg-black">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
            <div class="my-4 lg:mt-0">
                <div class="px-6 py-10 space-y-4 text-gray-100 bg-black lg:space-y-6 rounded-xl">
                    <div class="flex items-baseline space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-8 h-8 mt-2">
                            <path fill-rule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Où nous trouver?</h2>
                            <p class="text-xl text-gray-400">Yaounde, Cameroun</p>
                        </div>
                    </div>
                    <div class="flex items-baseline space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd"
                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Comment nous écrire?</h2>
                            <p class="text-xl text-gray-400">contact@agencepoulie.com</p>
                        </div>
                    </div>
                    <div class="flex items-baseline space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Comment nous appeller?</h2>
                            <p class="text-xl text-gray-400">+237 6 57 55 21 55</p>
                        </div>
                    </div>
                    <div class="flex items-baseline space-x-3">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-8 h-8" viewBox="0 0 16 16">
                            <path
                                d="M13.601 2.326A7.854 7.854 0 0 0 7.994 0C3.627 0 .068 3.558.064 7.926c0 1.399.366 2.76 1.057 3.965L0 16l4.204-1.102a7.933 7.933 0 0 0 3.79.965h.004c4.368 0 7.926-3.558 7.93-7.93A7.898 7.898 0 0 0 13.6 2.326zM7.994 14.521a6.573 6.573 0 0 1-3.356-.92l-.24-.144-2.494.654.666-2.433-.156-.251a6.56 6.56 0 0 1-1.007-3.505c0-3.626 2.957-6.584 6.591-6.584a6.56 6.56 0 0 1 4.66 1.931 6.557 6.557 0 0 1 1.928 4.66c-.004 3.639-2.961 6.592-6.592 6.592zm3.615-4.934c-.197-.099-1.17-.578-1.353-.646-.182-.065-.315-.099-.445.099-.133.197-.513.646-.627.775-.114.133-.232.148-.43.05-.197-.1-.836-.308-1.592-.985-.59-.525-.985-1.175-1.103-1.372-.114-.198-.011-.304.088-.403.087-.088.197-.232.296-.346.1-.114.133-.198.198-.33.065-.134.034-.248-.015-.347-.05-.099-.445-1.076-.612-1.47-.16-.389-.323-.335-.445-.34-.114-.007-.247-.007-.38-.007a.729.729 0 0 0-.529.247c-.182.198-.691.677-.691 1.654 0 .977.71 1.916.81 2.049.098.133 1.394 2.132 3.383 2.992.47.205.84.326 1.129.418.475.152.904.129 1.246.08.38-.058 1.171-.48 1.338-.943.164-.464.164-.86.114-.943-.049-.084-.182-.133-.38-.232z" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Nous laisser un message sur Whatsapp?</h2>
                            <p class="text-xl text-gray-400">+33 767 791 110</p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div></template>
<script setup>
useHead({
    title: "Contacts - L'Agence Poulie"
})
</script>