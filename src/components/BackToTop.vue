<template>
    <div 
        @click="scrollToTop()" 
        :class="['back-to-top-btn', {'go-top': isTop}]"
    >
        <i class="fa-solid fa-arrow-up-long"></i>
    </div>  
</template>

<script>
    export default {
    name: 'BackToTop',
    data (){
        return {
            isTop: false
        }
    },
    methods: {
        //Fonction gérant le défilement vertical haut déplacement lent
        scrollToTop() {
            let onTop = document.getElementById('lowResH1').getBoundingClientRect().top
            window.scrollTo( { top: onTop, behavior: 'smooth' })
        },
    },
    mounted(){
        const that = this
        window.addEventListener('scroll', () => {
            let scrollPos = window.scrollY
            if(scrollPos >= 100){
                that.isTop = true
            } else {
                that.isTop = false
            }
        })
    }
}
</script>