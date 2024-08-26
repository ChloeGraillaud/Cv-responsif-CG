
    //Image fading in and out at beginning
    document.addEventListener('DOMContentLoaded', function() {
        
        const image1 = document.getElementById('image1');
        const image2 = document.getElementById('image2');

    
        gsap.fromTo(image1,
            { opacity: 1 },
            { opacity: 0, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" }
        );

        gsap.fromTo(image2,
            { opacity: 0 },
            { opacity: 1, duration: 3, repeat: -1, yoyo: true, ease: "power1.inOut" }
        );
    });

    // Liste Competence levitation
    document.addEventListener("DOMContentLoaded", function() {
        gsap.utils.toArray(".levitating-list").forEach(function(element) {
            gsap.to(element, {
                y: 20,
                duration: 2,
                ease: "power1.inOut",
                yoyo: true,
                repeat: -1,
                delay: Math.random() * 2
            });
        });
    });

    
    document.addEventListener("DOMContentLoaded", function() {
        const roundedBoxes = document.querySelectorAll('.rounded-box');

        // Fonction pour initialiser Particles.js
        function initParticles(container) {
            particlesJS(container, {
                "particles": {
                    "number": {
                        "value": 0
                    },
                    "color": {
                        "value": "#f0ab16"
                    },
                    "shape": {
                        "type": "circle"
                    },
                    "opacity": {
                        "value": 1
                    },
                    "size": {
                        "value": 3
                    },
                    "line_linked": {
                        "enable": false
                    },
                    "move": {
                        "enable": true,
                        "speed": 6,
                        "direction": "none",
                        "random": false,
                        "straight": false,
                        "out_mode": "out"
                    }
                },
                "interactivity": {
                    "detect_on": "canvas",
                    "events": {
                        "onhover": {
                            "enable": false
                        },
                        "onclick": {
                            "enable": false
                        },
                        "resize": true
                    }
                },
                "retina_detect": true
            });
        }
        
        //Particule sur les rounded boxes

        // Initialisation de Particles.js pour chaque box
        roundedBoxes.forEach(box => {
            const particlesContainer = box.querySelector('.particles-js').id = 'particles-' + Math.random().toString(36).substr(2, 9);
            initParticles(particlesContainer);
        });

        // GSAP Animation pour agrandir la boîte et les particules
        roundedBoxes.forEach(box => {
            const particlesContainer = box.querySelector('.particles-js');

            box.addEventListener("mouseenter", () => {
                gsap.to(box, { scale: 1.1, duration: 0.3, ease: "power1.inOut" });

                particlesJS(particlesContainer.id, {
                    "particles": {
                        "number": {
                            "value": 50
                        },
                        "color": {
                            "value": "#f0ab16"
                        },
                        "shape": {
                            "type": "circle"
                        },
                        "opacity": {
                            "value": 1
                        },
                        "size": {
                            "value": 3
                        },
                        "line_linked": {
                            "enable": false
                        },
                        "move": {
                            "enable": true,
                            "speed": 6,
                            "direction": "none",
                            "random": false,
                            "straight": false,
                            "out_mode": "out"
                        }
                    },
                    "interactivity": {
                        "detect_on": "canvas",
                        "events": {
                            "onhover": {
                                "enable": false
                            },
                            "onclick": {
                                "enable": false
                            },
                            "resize": true
                        }
                    },
                    "retina_detect": true
                });
            });

            box.addEventListener("mouseleave", () => {
                gsap.to(box, { scale: 1, duration: 0.3, ease: "power1.inOut" });

                setTimeout(() => {
                    particlesJS(particlesContainer.id, {
                        "particles": {
                            "number": {
                                "value": 0
                            },
                            "color": {
                                "value": "#f0ab16"
                            },
                            "shape": {
                                "type": "circle"
                            },
                            "opacity": {
                                "value": 1
                            },
                            "size": {
                                "value": 3
                            },
                            "line_linked": {
                                "enable": false
                            },
                            "move": {
                                "enable": true,
                                "speed": 6,
                                "direction": "none",
                                "random": false,
                                "straight": false,
                                "out_mode": "out"
                            }
                        },
                        "interactivity": {
                            "detect_on": "canvas",
                            "events": {
                                "onhover": {
                                    "enable": false
                                },
                                "onclick": {
                                    "enable": false
                                },
                                "resize": true
                            }
                        },
                        "retina_detect": true
                    });
                }, 500);
            });
        });
    });

    //Nom animé
    const textSpans = document.querySelectorAll('.nameanim span');

    textSpans.forEach(span => {
      span.addEventListener('mouseenter', () => {
        gsap.to(span, { y: -20, duration: 0.3 });
      });

      span.addEventListener('mouseleave', () => {
        gsap.to(span, { y: 0, duration: 0.3 });
      });
    });
      
    //Dark mode

    document.addEventListener('DOMContentLoaded', function() {
        const toggleButton = document.getElementById('dark-mode-toggle');
        const body = document.body;
        const darkModeIcon = "images/moon.png";
        const lightModeIcon = "images/sun.png";
        const darkMode = "dark-mode";
    
        function updateButtonIcon() {
            const img = toggleButton.querySelector('img');
            if (body.classList.contains(darkMode)) {
                img.src = lightModeIcon;
                img.alt = "Mode clair";
            } else {
                img.src = darkModeIcon;
                img.alt = "Mode sombre";
            }
        }
    
        toggleButton.addEventListener('click', () => {
            body.classList.toggle(darkMode);
            if (body.classList.contains(darkMode)) {
                localStorage.setItem('theme', 'dark');
            } else {
                localStorage.setItem('theme', 'light');
            }
            updateButtonIcon();
        });
    
        const savedTheme = localStorage.getItem('theme');
        if (savedTheme === 'dark') {
            body.classList.add(darkMode);
        }
        updateButtonIcon();
    });

    //Email js pour envoyer les mails 

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const confirmationMessage = document.getElementById('confirmation-message');
        const sendingMessage = document.getElementById('sending-message');
        
        emailjs.init("Xr1CR-irF8-QLAcTO");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            console.log('Form submitted');
            
            // Masquer le formulaire et afficher le message "Envoi en cours..."
            form.style.display = 'none';
            sendingMessage.style.display = 'block';
            
            emailjs.sendForm('service_a9jm7uh', 'template_ru317cl', this)
                .then(function() {
                    console.log('Email sent successfully');
                    
                    // Masquer le message "Envoi en cours..." et afficher le message de confirmation
                    sendingMessage.style.display = 'none';
                    confirmationMessage.style.display = 'block';
                }, function(error) {
                    console.log('Error sending email', error);
                    
                    // Masquer le message "Envoi en cours...", réafficher le formulaire et afficher une alerte d'erreur
                    sendingMessage.style.display = 'none';
                    form.style.display = 'block';
                    alert('Erreur lors de l\'envoi du message : ' + JSON.stringify(error));
                });
        });
    });
    
    
    
    
    