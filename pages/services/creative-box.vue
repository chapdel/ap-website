<template>
    <div class="lg:mt-32">
        <div class="mx-auto flex flex-col items-center gap-6 sm:w-4/5 md:w-full md:flex-row lg:gap-12 px-4">
            <div class="relative md:w-1/2" data-aos="fade-right" data-aos-delay="300">
                <div aria-hidden="true"
                     class="absolute inset-0 m-auto grid h-3/5 w-3/5 grid-cols-2 -space-x-52 opacity-40 dark:opacity-60">
                    <div class="h-full rounded-full bg-gradient-to-br from-primary to-purple-400 blur-[106px] dark:from-blue-700"></div>
                    <div class="h-full bg-gradient-to-r from-cyan-400 to-primary blur-[106px] dark:to-indigo-600"></div>
                </div>
                <img class="relative rounded" src="/voxbox-hero.jpg" alt="stats illustration"
                     width="1746" height="1746">
            </div>
            <div class="ml-auto h-full md:w-1/2" data-aos="fade-left" data-aos-delay="300">
                <h1 class="text-5xl font-black md:text-6xl xl:text-7xl">Creative Box</h1>
                <div class="">
                    <p class="mt-8 text-lg text-gray-700">Si vous pouvez le rêver, nous pouvons le créer, parce que pour
                        nous, la créativité est une drogue qui nous pousse chaque jour à faire quelque chose qui effraie
                        vos concurrents</p>
                    <div class="mt-12 flex justify-center gap-4 sm:gap-6 md:justify-start">
                        <NuxtLink to="/contacts" data-aos="fade-up" data-aos-delay="300"
                                  class="block w-full p-4 text-center text-white uppercase rounded-md lg:w-8/12 bg-black/95 hover:bg-black">
                            S"ACCROCHER à LA POULIE
                        </NuxtLink>
                    </div>
                </div>
            </div>
        </div>
        <div class="relative" id="features">
            <div class="mx-auto max-w-6xl px-6 md:px-12 lg:px-6 xl:px-0" data-aos="fade-up" data-aos-delay="300">
                <div class="md:w-3/5 mt-16 lg:mt-32">
                    <h2 class="text-3xl font-bold text-gray-900 md:text-4xl lg:text-5xl">
                        Nos prestations</h2>
                    <p class="mt-4 text-gray-600 hidden">Apiente optio repellendus atque
                        illum odio! Fugiat at expedita deserunt dolorum molestias.</p>
                </div>
                <div class="mt-16">
                    <div
                            class="mt-8 grid grid-cols-1 gap-8 md:mt-16 md:grid-cols-2 md:gap-12 lg:grid-cols-3"
                    >
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Graphisme & Prints</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    Notre équipe de créatifs se compose d’un directeur artistique, de graphistes et de webdesigners qui pourront répondre à toutes vos problématiques en matière de supports de communication de la conception graphique au print. Quelle que soit votre entreprise nos équipes peuvent créer la solution adaptée à vous et à votre identité visuelle.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Photographie</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    Nous sommes conscients que chaque projet est unique, c'est pourquoi nous prenons le temps de comprendre vos besoins et vos objectifs pour produire des images qui traitent votre vision. Nous serons ravis de vous aider à donner vie à vos idées et de vous accompagner dans la réussite de votre entreprise ou de votre personal branding.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Videos</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    L’Agence Poulie offre une large gamme de services de vidéographie, allant de la production de vidéos d'entreprise à la réalisation de vidéos teasing, en passant par la production de vidéos événementielles, de films documentaires et spots publicitaires ou encore de vidéos artistiques. Nous travaillons à produire des vidéos qui captent l'attention de votre public et transmettent votre message de manière percutante.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Copywriting & Redaction Web</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    Vous souhaitez toucher votre cible par une histoire captivante et persuasive, nous rédigeons pour vous des textes qui contrôlent votre image de marque, captent l'attention de votre audience et transmettent votre message de manière claire et efficace.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Podcasts</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    Parce que le podcast est un excellent moyen de se démarquer de la concurrence, nous produisons pour vous des podcasts originaux et créatifs pour vous permettre non seulement d’attirer l'attention de votre public mais aussi de renforcer votre image de marque.
                                </p>
                            </div>
                        </div>
                        <div class="flex items-start gap-4">
                            <span class="shrink-0 rounded-lg bg-gray-200 p-4">
                              <svg
                                      class="h-5 w-5"
                                      fill="none"
                                      stroke="currentColor"
                                      viewBox="0 0 24 24"
                                      xmlns="http://www.w3.org/2000/svg"
                              >
                                <path d="M12 14l9-5-9-5-9 5 9 5z"></path>
                                <path
                                        d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                                ></path>
                                <path
                                        stroke-linecap="round"
                                        stroke-linejoin="round"
                                        stroke-width="2"
                                        d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                                ></path>
                              </svg>
                            </span>
                            <div>
                                <h2 class="text-lg font-bold">Illustrations</h2>

                                <p class="mt-1 text-sm text-gray-700">
                                    Nos illustrateurs sont d’excellents artistes visuels qui créent des images pour transmettre votre message ou raconter des belles histoires autour de votre marque. Ils créent à travers cette technique des projets extraordinaires qui vous présentent de manière unique : Publicités, Packeging, covers, magazines, bandes dessinées, affiches, des cartes de vœux et bien plus encore.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <section class="lg:mt-24" data-aos="fade-down" data-aos-delay="300">
            <div
                    class="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8"
            >
                <div class="grid grid-cols-1 gap-8 lg:grid-cols-2 lg:gap-16">
                    <div
                            class="relative h-64 overflow-hidden rounded-lg sm:h-80 lg:order-last lg:h-full"
                    >
                        <img
                                alt="Party"
                                src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
                                class="absolute inset-0 h-full w-full object-cover"
                        />
                    </div>

                    <div class="lg:py-24">
                        <h2 class="text-3xl font-bold sm:text-4xl">La Ghost Team</h2>

                        <p class="mt-4 text-gray-600">
                            Notre équipe de fous créatifs viendra à vous pour discuter avec vous afin de comprendre vos
                            besoins, vos objectifs, votre budget et les spécifications de votre projet.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <section>
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
        </section>
    </div>
</template>
<script setup lang="ts">
useHead({
    title: "Creative box - L'Agence Poulie"
})
</script>