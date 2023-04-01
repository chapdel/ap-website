<template>
    <div class="space-y-6 px-4">
        <div class="py-16  max-w-screen-lg mx-auto rounded-lg">
            <h1 class="lg:text-5xl text-3xl">Nous Contacter</h1>
            <p class="max-w-lg text-gray-600 text-lg">
                Prennez contact avec nous et discutons de votre projet.
            </p>
        </div>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-x-12 gap-y-6 max-w-screen-lg mx-auto">
            <div class="max-w-lg">
                <form @submit.prevent="" class="grid grid-cols-1 gap-4">
                    <div>
                        <label for="" class="text-gray-600">Nom</label>
                        <input type="text"
                            class="text-gray-900 block p-4 w-full placeholder-gray-700 ring-0 focus:ring-0 outline-none focus:outline-none rounded-md bg-gray-200">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Email</label>
                        <input type="email"
                            class="text-gray-900 block p-4 w-full placeholder-gray-700 ring-0 focus:ring-0 outline-none focus:outline-none rounded-md bg-gray-200">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Télephone</label>
                        <input type="text"
                            class="text-gray-900 block p-4 w-full placeholder-gray-700 ring-0 focus:ring-0 outline-none focus:outline-none rounded-md bg-gray-200">
                    </div>
                    <div>
                        <label for="" class="text-gray-600">Message</label>
                        <textarea
                            class="text-gray-900 block p-4 w-full placeholder-gray-700 ring-0 focus:ring-0 outline-none focus:outline-none rounded-md bg-gray-200"
                            rows="5"></textarea>
                    </div>
                    <div>
                        <button class="w-full block p-4 rounded-md bg-gray-950 hover:bg-black text-white">
                            Envoyer le message
                        </button>
                    </div>
                </form>
            </div>
            <div class="mt-4 lg:mt-0">
                <div class="lg:space-y-6 space-y-4 bg-black text-gray-100 rounded-xl py-10 px-6">
                    <div class="flex space-x-3 items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"
                            class="w-8 h-8 mt-2">
                            <path fill-rule="evenodd"
                                d="M11.54 22.351l.07.04.028.016a.76.76 0 00.723 0l.028-.015.071-.041a16.975 16.975 0 001.144-.742 19.58 19.58 0 002.683-2.282c1.944-1.99 3.963-4.98 3.963-8.827a8.25 8.25 0 00-16.5 0c0 3.846 2.02 6.837 3.963 8.827a19.58 19.58 0 002.682 2.282 16.975 16.975 0 001.145.742zM12 13.5a3 3 0 100-6 3 3 0 000 6z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Où nous trouver?</h2>
                            <p class="text-gray-400 text-xl">Yaounde, Cameroun</p>
                        </div>
                    </div>
                    <div class="flex space-x-3 items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd"
                                d="M4.848 2.771A49.144 49.144 0 0112 2.25c2.43 0 4.817.178 7.152.52 1.978.292 3.348 2.024 3.348 3.97v6.02c0 1.946-1.37 3.678-3.348 3.97a48.901 48.901 0 01-3.476.383.39.39 0 00-.297.17l-2.755 4.133a.75.75 0 01-1.248 0l-2.755-4.133a.39.39 0 00-.297-.17 48.9 48.9 0 01-3.476-.384c-1.978-.29-3.348-2.024-3.348-3.97V6.741c0-1.946 1.37-3.68 3.348-3.97zM6.75 8.25a.75.75 0 01.75-.75h9a.75.75 0 010 1.5h-9a.75.75 0 01-.75-.75zm.75 2.25a.75.75 0 000 1.5H12a.75.75 0 000-1.5H7.5z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Comment nous écrire?</h2>
                            <p class="text-gray-400 text-xl">contact@agencepoulie.com</p>
                        </div>
                    </div>
                    <div class="flex space-x-3 items-baseline">
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-8 h-8">
                            <path fill-rule="evenodd"
                                d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z"
                                clip-rule="evenodd" />
                        </svg>

                        <div class="space-y-2">
                            <h2 class="text-2xl font-bold">Comment nous appeller?</h2>
                            <p class="text-gray-400 text-xl">+237 6 57 55 21 55</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>