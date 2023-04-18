<template>
    <div class="space-y-6">

        <div class="grid max-w-screen-lg grid-cols-1 gap-12 px-4 mx-auto mt-8 lg:mb-20 lg:grid-cols-2">
            <div class="space-y-3 lg:col-span-2 lg:space-y-4">
                <h1 class="text-5xl font-bold uppercase lg:text-5xl">Services</h1>
                <p>Nous les offrons aux <span class="text-2xl text-yellow-500">entreprises</span> et <span
                        class="text-2xl text-yellow-500">particuliers</span></p>
            </div>
            <div class="relative">
                <img src="https://fastwpdemo.com/newwp/vcamp/wp-content/uploads/2021/10/img_40.jpg"
                     class="w-9/12 mx-auto lg:w-full grayscale" alt="">
                <div class="absolute left-0 p-6 text-gray-100 rounded shadow bg-black/90 lg:-left-8 w-72 bottom-4">
                    <p class="text-sm">Nous valorisons grandement la collaboration avec nos clients. Nous croyons que
                        c'est
                        la clé pour fournir des services et des produits qui répondent aux besoins et aux attentes de
                        nos
                        clients.</p>
                </div>
            </div>
            <div class="relative space-y-5">
                <h2 class="text-3xl font-semibold leading-10">Nous pilotons la croissance de nous partenaires</h2>
                <p class="text-xl leading-8">Notre processus de collaboration commence par l'écoute attentive des
                    besoins et
                    des objectifs de nos clients. Nous encourageons nos clients à partager autant d'informations que
                    possible sur leur entreprise, leur marché et leur public cible. Cette étape est cruciale pour
                    comprendre
                    les défis auxquels nos clients sont confrontés et pour identifier les opportunités
                    d'amélioration.</p>
                <NuxtLink to="/contacts"
                          class="block w-full p-4 text-center text-white uppercase rounded-md lg:w-8/12 bg-black/95 hover:bg-black">
                    S'ACCROCHEZ VOUS à LA POULIE
                </NuxtLink>
                <img class="absolute hidden h-40 lg:block right-4 bottom-8"
                     src="https://fastwpdemo.com/newwp/vcamp/wp-content/themes/vcamp/assets/images/shape/shape_05.svg"
                     alt="">
            </div>
        </div>
        <section>
            <div class="w-full mx-auto max-w-7xl md:px-12 px-8 py-12 items-center relative">
                <dl class="grid grid-cols-1 gap-3 lg:grid-cols-3 lg:space-y-0 sm:grid-cols-2"><a class="group"
                                                                                                 href="/posts/1"
                                                                                                 title="With Markdown &amp; MDX in Astro">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img
                                alt="With Markdown &amp; MDX in Astro"
                                class="h-full aspect-video bg-center object-cover"
                                src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2072&amp;q=80">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Stratégie Marketing</p>
                                </div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">Astro supports fast,
                                    automatic RSS feed generation for blogs and other content websites. For more
                                    information about RSS feeds in general, see aboutfeeds.com.</p></div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2022.03.03</time></span> Kev Inhart
                                </p>
                            </footer>
                        </div>
                    </article>
                </a><a class="group" href="/posts/2" title="Use Shiki to style code!">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img alt="Use Shiki to style code!"
                                                                                     class="h-full aspect-video bg-center object-cover"
                                                                                     src="https://images.unsplash.com/photo-1496171367470-9ed9a91ea931?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Marketing d’influence</p></div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">It uses TextMate grammar to
                                    tokenize strings, and colors the tokens with VS Code themes. In short, Shiki
                                    generates HTML that looks exactly like your code in VS Code, and it works great in
                                    your static website generator.</p></div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2022.03.03</time></span> Theel Onmusk
                                </p>
                            </footer>
                        </div>
                    </article>
                </a><a class="group" href="/posts/3" title="Newsletter directory.">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img alt="Newsletter directory."
                                                                                     class="h-full aspect-video bg-center object-cover"
                                                                                     src="https://images.unsplash.com/photo-1483058712412-4245e9b90334?ixlib=rb-4.0.3&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Création de marque</p></div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">The great thing about blogs
                                    is that your work compounds over time. Anyone can read, share and discover past
                                    work, which helps you build trust with your audience and improve search
                                    rankings.</p></div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2022.17.08</time></span> Astro
                                </p>
                            </footer>
                        </div>
                    </article>
                </a><a class="group" href="/posts/4" title="Using MDX">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img alt="Using MDX"
                                                                                     class="h-full aspect-video bg-center object-cover"
                                                                                     src="https://miro.medium.com/max/1400/1*w90qkEzBUcvMhgJwrHOIYg.webp">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Creative box</p></div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">In interactive animation, a
                                    computer application generates animation in real-time based on user inputs like
                                    hovering, clicking, scrolling, or other prompts. This type of animation allows
                                    viewers to interact and engage with your design on several different levels.</p>
                            </div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2022.03.03</time></span> Peter Ibarra
                                </p>
                            </footer>
                        </div>
                    </article>
                </a><a class="group" href="/posts/5" title="Encryption to iCloud backups">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img alt="Encryption to iCloud backups"
                                                                                     class="h-full aspect-video bg-center object-cover"
                                                                                     src="https://duet-cdn.vox-cdn.com/thumbor/0x0:2040x1360/1200x800/filters:focal(1020x680:1021x681):format(webp)/cdn.vox-cdn.com/uploads/chorus_asset/file/23951261/VRG_Illo_N_Barclay_5_apple.jpg">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Site internet/apps</p></div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">Apple will finally be
                                    adding end-to-end encryption to iCloud backups, the company said as part of a major
                                    set of security announcements on Wednesday.</p></div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2023.06.12</time></span> Thev Erge
                                </p>
                            </footer>
                        </div>
                    </article>
                </a><a class="group" href="/posts/6" title="Make yourself at home">
                    <article
                            class="flex-1 rounded-3xl duration-200 bg-black h-full hover:bg-accent-500 overflow-hidden">
                        <div class="w-full block lg:col-span-2 overflow-hidden"><img alt="Make yourself at home"
                                                                                     class="h-full aspect-video bg-center object-cover"
                                                                                     src="https://cdn.dribbble.com/users/2661337/screenshots/18462831/media/38453502c43beb6919bc4e7b19796851.jpg">
                        </div>
                        <div class="w-full flex flex-col flex-1 items-start justify-between p-6">
                            <div>
                                <div><p class="text-white text-xl font-semibold">Communication/Marketing digital</p></div>
                                <p class="text-white mt-12 font-normal lg:mt-3 line-clamp-2">Apple will finally be
                                    adding end-to-end encryption to iCloud backups, the company said as part of a major
                                    set of security announcements on Wednesday.</p></div>
                            <footer>
                                <p class="text-white mt-12 hover:text-white/70 inline-flex items-center lg:mt-24 text-xl">
                                    <span><time class="text-white block text-xs">2023.06.12</time></span> Kev Inhart
                                </p>
                            </footer>
                        </div>
                    </article>
                </a></dl>
            </div>
        </section>
        <div class="py-16 bg-white">
            <div class="px-6 mx-auto max-w-7xl lg:px-8">
                <h2 class="text-2xl font-semibold leading-8 text-center text-gray-900">Ils se sont accrochés a la
                    Poulie</h2>
                <div
                        class="grid items-center max-w-lg grid-cols-4 mx-auto mt-10 gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
                    <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                         src="https://tailwindui.com/img/logos/158x48/transistor-logo-gray-900.svg" alt="Transistor"
                         width="158" height="48">
                    <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                         src="https://tailwindui.com/img/logos/158x48/reform-logo-gray-900.svg" alt="Reform" width="158"
                         height="48">
                    <img class="object-contain w-full col-span-2 max-h-12 lg:col-span-1"
                         src="https://tailwindui.com/img/logos/158x48/tuple-logo-gray-900.svg" alt="Tuple" width="158"
                         height="48">
                    <img class="object-contain w-full col-span-2 max-h-12 sm:col-start-2 lg:col-span-1"
                         src="https://tailwindui.com/img/logos/158x48/savvycal-logo-gray-900.svg" alt="SavvyCal"
                         width="158"
                         height="48">
                    <img class="object-contain w-full col-span-2 col-start-2 max-h-12 sm:col-start-auto lg:col-span-1"
                         src="https://tailwindui.com/img/logos/158x48/statamic-logo-gray-900.svg" alt="Statamic"
                         width="158"
                         height="48">
                </div>
            </div>
            <div class="mt-12 bg-white">
                <div class="mx-auto max-w-7xl sm:px-6 lg:px-8">
                    <div
                            class="relative px-6 py-24 overflow-hidden text-center bg-gray-900 shadow-2xl isolate sm:rounded-3xl sm:px-16">
                        <h2 class="max-w-2xl mx-auto text-4xl font-bold tracking-tight text-white">Pret à vous
                            accrocher?</h2>
                        <p class="max-w-xl mx-auto mt-6 text-lg leading-8 text-gray-300">Lorem ipsum dolor sit amet,
                            consectetur adipisicing elit. Nam doloribus fugiat, a sequi nemo recusandae non molestias
                            in.
                        </p>
                        <div class="flex items-center justify-center mt-10 gap-x-6">
                            <NuxtLink to="/contacts"
                                      class="rounded-md bg-white px-3.5 py-1.5 text-base font-semibold leading-7 text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white">
                                Faites le maintenant!
                            </NuxtLink>
                            <NuxtLink to="/about" class="text-base font-semibold leading-7 text-white">Qui sommes nous?
                                <span aria-hidden="true">→</span></NuxtLink>
                        </div>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1024 1024"
                             class="absolute top-1/2 left-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2"
                             aria-hidden="true">
                            <circle cx="512" cy="512" r="512" fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
                                    fill-opacity="0.7"/>
                            <defs>
                                <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217" cx="0" cy="0" r="1"
                                                gradientUnits="userSpaceOnUse"
                                                gradientTransform="translate(512 512) rotate(90) scale(512)">
                                    <stop stop-color="#7775D6"></stop>
                                    <stop offset="1" stop-color="#E935C1" stop-opacity="0"></stop>
                                </radialGradient>
                            </defs>
                        </svg>
                    </div>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
useHead({
    title: "Services - L'Agence Poulie"
})
</script>