$(document).ready(function() {
    
    // 1. Efecto de animación al desplazarse (Scroll Reveal)
    function reveal() {
        var reveals = document.querySelectorAll(".reveal");
        for (var i = 0; i < reveals.length; i++) {
            var windowHeight = window.innerHeight;
            var elementTop = reveals[i].getBoundingClientRect().top;
            var elementVisible = 150;
            if (elementTop < windowHeight - elementVisible) {
                reveals[i].classList.add("active");
            }
        }
    }
    window.addEventListener("scroll", reveal);

    // 2. Cambio entre temas Claro/Oscuro
    $("#theme-toggle").click(function() {
        const currentTheme = $("body").attr("data-theme");
        if (currentTheme === "dark") {
            $("body").removeAttr("data-theme");
            $(this).html('<i class="fas fa-moon"></i>');
        } else {
            $("body").attr("data-theme", "dark");
            $(this).html('<i class="fas fa-sun"></i>');
        }
    });

    // 3. Validación de formulario en tiempo real
    $("#email").on("input", function() {
        const email = $(this).val();
        const emailReg = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        
        if (!emailReg.test(email)) {
            $("#emailError").show();
            $(this).addClass("is-invalid");
        } else {
            $("#emailError").hide();
            $(this).removeClass("is-invalid").addClass("is-valid");
        }
    });

    // 4. Interacción de las Tarjetas (Flip effect)
$(".flip-card").click(function() {
    $(this).toggleClass("is-flipped");
});

    // Manejo del envío del formulario
    $("#contactForm").submit(function(e) {
        e.preventDefault();
        alert("¡Gracias por tu mensaje! Te responderé apenas me sea posible ;)");
        this.reset();
    });
});