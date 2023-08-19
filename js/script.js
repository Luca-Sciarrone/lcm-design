
/* HAMBURGER MENU */

function apri_menu() {
    let nav = document.getElementById("nav_dinamica");
    let nav_hamb = document.getElementById("nav_hamb");

    nav.classList.toggle("menu-open");
    
    nav_hamb.classList.toggle("hamburger-menu--open");
}
/*----------------------------------- Sezione Prima */
/* Logo rotante */
gsap.from(".animazione_titolo", {
    duration: 10,
    rotation: 360,
    repeat: -1,
    ease: "linear"
})

/* Velo a scomparsa */


/* NAV e PRIMO TITOLO */

gsap.from("header ul li", {
    duration: 1,
    y:-80,
    stagger: 0.1,
    opacity: 0
})

gsap.from(".prima .titolo", {
    duration: 1.2,
    opacity: 0,
    y:100
})

gsap.from(".prima .bottone", {
    duration: 1,
    y:100,
    stagger: 1
})



/* SCROLLTRIGGER triade iniziale */
gsap.registerPlugin(ScrollTrigger);

gsap.to(".sinistra", {
    y: -400,
    duration: 2,
    scrollTrigger: {
        trigger: ".sinistra",
        start: "top 90%" ,
        scrub: 6,
        toggleActions: "restart none none none"
    }
});

gsap.to(".destra", {
    y: -400,
    duration: 2,
    scrollTrigger: {
        trigger: ".destra",
        start: "top 80%" ,
        scrub: 6,
        toggleActions: "restart none none none"
    }
});

/*--------------------------------------- Sezione seconda */

/* SCROLLTRIGGER Testi -> titolo  */

gsap.to(".p_anim_uno", {
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".p_anim_uno",
        start: "top 90%",
        scrub: 2,
        toggleActions: "restart none none none"
    }
});

gsap.to(".p_anim_due", {
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: ".p_anim_due",
        start: "top 90%",
        scrub: 2,
        toggleActions: "restart none none none"
    }
});

gsap.to(".p_anim_tre", {
    x: 100,
    duration: 1,
    scrollTrigger: {
        trigger: ".p_anim_tre",
        start: "top 90%",
        scrub: 2,
        toggleActions: "restart none none none"
    }
});

gsap.from(".testi .p-centrale", {
    duration: 1,
    y:80,
    scrollTrigger: {
        trigger: ".testi .p-centrale",
        start: "top 99%",
        end: "top 80%"
    }
})

gsap.from(".testi .bottone", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: ".testi .bottone",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.to("#atelier .immagine_destra img", {
    y: -400,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .immagine_destra img",
        start: "top 99%" ,
        scrub: 6,
        toggleActions: "restart none none none"
    }
});

gsap.to("#atelier .sezione_sinistra .titolo", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_sinistra .titolo",
        start: "top 99%" ,
    }
});

gsap.to("#atelier .sezione_sinistra .p-centrale", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_sinistra .p-centrale",
        start: "top 99%" ,
    }
});

gsap.to("#atelier .sezione_sinistra .bottone", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_sinistra .bottone",
        start: "top 90%" ,
    }
});

gsap.to("#atelier .sezione_destra .titolo", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_destra .titolo",
        start: "top 99%" ,
    }
});

gsap.to("#atelier .sezione_destra .p-centrale", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_destra .p-centrale",
        start: "top 99%" ,
    }
});

gsap.to("#atelier .sezione_destra .bottone", {
    y: -200,
    duration: 2,
    scrollTrigger: {
        trigger: "#atelier .sezione_destra .bottone",
        start: "top 99%" ,
    }
});


/*-------------------------------------------- Sezione Quinta */

gsap.from("#carnet .inspiration", {
    duration: 1,
    y:80,
    stagger: 1,
    opacity: 0,
    scrollTrigger: {
        trigger: "#carnet .inspiration",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.to("#carnet .carnet", {
    x: -100,
    duration: 1,
    scrollTrigger: {
        trigger: "#carnet .carnet",
        start: "top 90%",
        scrub: 2,
        toggleActions: "restart none none none"
    }
});

gsap.to("#carnet .corsivo", {
    x: -100,
    duration: 1.2,
    scrollTrigger: {
        trigger: "#carnet .corsivo",
        start: "top 90%",
        scrub: 2,
        toggleActions: "restart none none none"
    }
});

gsap.from("#carnet .bottone", {
    duration: 1,
    y:100,
    stagger: 1,
    scrollTrigger: {
        trigger: "#carnet .bottone",
        start: "top 99%",
        end: "top 80%" 
    }
})



/*-------------------------------------------- Sezione sesta */

gsap.from("#sesta .titolo", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: "#sesta .titolo",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.from("#contenitore_sesta .p-centrale", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: "#contenitore_sesta .p-centrale",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.from("#contenitore_sesta .bottone", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: "#contenitore_sesta .bottone",
        start: "top 99%",
        end: "top 80%" 
    }
})

/*--------------------------------- Sezione Settima */

gsap.from("#sezione_sette .titolo", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: "#sezione_sette .corsivo",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.from("#sezione_sette .p-centrale", {
    duration: 1,
    y:80,
    stagger: 1,
    scrollTrigger: {
        trigger: "#sezione_sette .p-centrale",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.from(".marche .marca", {
    duration: 0.5,
    y:80,
    stagger: 0.1,
    scrollTrigger: {
        trigger: ".marche .marca",
        start: "top 99%",
        end: "top 80%" 
    }
})

/*---------------------------- Sezione ottava */

gsap.from("#otto .titolo", {
    duration: 10,
    x: 1000,
    repeat: -1,
    ease: "linear"
})

gsap.from("#otto .p_sx", {
    duration: 2.5,
    opacity: 0,
    stagger: 1,
    scrollTrigger: {
        trigger: "#otto .p_sx",
        start: "top 99%",
        end: "top 80%" 
    }
})


/* --------------------------------Footer */

/* var tl = gsap.timeline()
 */
gsap.from(".infolettre, .haut-rhin, .socials", {
    duration: 1,
    y:80,
    scrollTrigger: {
        trigger: "infolettre, .haut-rhin, .socials",
        start: "top 99%",
        end: "top 80%" 
    }
})

gsap.from(".crediti", {
    duration: 1.5,
    y:80,
    scrollTrigger: {
        trigger: ".crediti",
        start: "top 99%",
        end: "top 80%" 
    }
}), "+=3";



gsap.from(".bas-rhin", {
    duration: 2,
    y:80,
    scrollTrigger: {
        trigger: ".bas-rhin",
        start: "top 99%",
        end: "top 80%" 
    }
}), "+=3";

gsap.from(".mars_rouge", {
    duration: 2.5,
    y:80,
    scrollTrigger: {
        trigger: ".mars_rouge",
        start: "top 99%",
        end: "top 80%" 
    }
}), "+=3";
