<template>
    <div>
        <div class="grid max-w-screen-lg grid-cols-1 gap-12 px-4 mx-auto mt-16 lg:grid-cols-2">
            <div class="order-1 space-y-3 lg:space-y-6 lg:order-0">
                <h1 class="text-5xl font-bold uppercase lg:text-5xl">L'agence</h1>
                <p class="text-lg">Une poulie est un dispositif mécanique qui permet de hisser des objets à une hauteur peu
                    accessible. Elle est composée d’une roue (jante), d’une corde, d’une chaine ou d’une courroie. Ces
                    éléments
                    forment la belle équipe passionnée et dévouée qui compose la poulie avec laquelle nous vous tirons en
                    hauteur afin de vous démarquer de la concurrence.</p>

                <NuxtLink to="/contacts"
                    class="block w-full p-4 text-center text-white uppercase rounded-md lg:w-8/12 bg-black/95 hover:bg-black">
                    S"ACCROCHEZ à LA POULIE
                </NuxtLink>
            </div>
            <div class="flex lg:justify-center order-0 lg:order-1">
                <div class="relative">
                    <div class="bg-black h-[18rem] rounded-lg w-[16rem] lg:h-[26rem] lg:w-[20rem] transform rotate-6"></div>
                    <div
                        class="bg-gray-100 h-[18rem] rounded-lg w-[16rem] lg:h-[26rem] lg:w-[20rem] absolute left-10 top-0 transform -right-20 bg-[url('/about-poster.jpg')] grayscale bg-cover">
                    </div>
                </div>
            </div>

        </div>
        <div class="block w-full h-full mt-20 bg-[url('/about-poster-2.jpg')] min-h-96">
            <div class="px-4 backdrop-blur-lg">
                <div class="grid max-w-screen-lg gap-6 py-24 mx-auto lg:grid-cols-3">
                    <div>
                        <h2 class="text-gray-100"><span class="text-lg">Nous résolvons vos</span> <span
                                class="text-5xl text-gray-50 lg:text-6xl">problèmes.</span></h2>

                    </div>
                    <div class="space-y-3 text-lg text-gray-100 lg:col-span-2">
                        <p>L’agence POULIE est avant tout une aventure humaine née de la volonté et des convictions de
                            personnes passionnées par la créativité, la proactivité et le désir permanent de satisfaction
                            client. </p>
                        <p>Nous sommes une entreprise à cheval entre un cabinet conseil en stratégie et une agence de
                            communication globale dont le principal savoir-faire est de valoriser celui de chacun de vous.
                            Parce que nous sommes persuadés que la convivialité de nos rapports est un atout essentiel pour
                            l’analyse du marché, la compréhension de vos objectifs et la recherche des solutions adaptés,
                            nous développons avec chacun de vous une relation de confiance qui facilite chacune de nos
                            collaborations.</p>
                    </div>
                </div>
            </div>
        </div>
        <div class="grid max-w-screen-lg gap-6 px-4 py-24 mx-auto lg:grid-cols-3">
            <div>
                <h2 class="text-gray-900"><span class="text-5xl lg:text-6xl">L'equipe</span> <span class="text-lg lg:block">
                        Dont vous avez</span><span class="text-5xl text-gray-700 lg:text-6xl"> Besoin</span></h2>

            </div>
            <div class="space-y-3 text-lg text-gray-800 lg:col-span-2">
                <p>Forte d’une équipe pluridisciplinaire et de passionnés du marketing, L’agence Poulie saura faire de votre
                    marque le sujet d’analyse de vos concurrents. Notre but étant de vous proposer un accompagnement 360°,
                    en mettant en avant toute notre polyvalence.</p>
                <div class="pt-8">
                    <NuxtLink to="/contacts"
                        class="p-4 mt-8 text-center text-white uppercase rounded-md bg-black/95 hover:bg-black">
                        ACCROCHEZ-VOUS A LA POULIE MAINTENANT
                    </NuxtLink>
                </div>
            </div>
        </div>

    </div>
</template>
<script setup>
useHead({
    title: "A propos de nous - L'Agence Poulie"
})
</script>