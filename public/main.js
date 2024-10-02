
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

    
    //Français/Anglais toggle

let currentLanguage = 'fr';


function loadTranslations(lang) {
  fetch('translations.json')
    .then(response => response.json())
    .then(data => {

      //Menu et Intro
      document.getElementById('offcanvasExampleLabel').textContent = data[lang].menu;
      document.getElementById('menuAccueil').textContent = data[lang].accueil;
      document.getElementById('menuCompetences').textContent = data[lang].competences;
      document.getElementById('menuExperiences').textContent = data[lang].experiences;
      document.getElementById('menuPortfolio').textContent = data[lang].portfolio;
      document.getElementById('menuFormation').textContent = data[lang].formation;
      document.getElementById('menuContact').textContent = data[lang].contact;
      document.getElementById('introText').innerHTML = data[lang].introText;
      document.getElementById('aboutTitle').innerHTML = data[lang].aboutTitle;
      document.getElementById('aboutText').innerHTML = data[lang].aboutText;
      document.getElementById('Iam').innerHTML = data[lang].Iam;
      document.getElementById('greeting').innerHTML = data[lang].greeting;

      // Mes Compétences
      document.getElementById('titleCompetence').innerHTML = data[lang].titleCompetence;
      document.getElementById('techniques').innerHTML = data[lang].techniques;
      document.getElementById('langues').innerHTML = data[lang].langues;
      document.getElementById('softSkill1').innerHTML = data[lang].softSkill1;
      document.getElementById('softSkill2').innerHTML = data[lang].softSkill2;
      document.getElementById('softSkill3').innerHTML = data[lang].softSkill3;
      document.getElementById('langue1').innerHTML = data[lang].langue1;
      document.getElementById('langue2').innerHTML = data[lang].langue2;

      //Mes Expériences
      document.getElementById('titleExperience').innerHTML = data[lang].titleExperience;
      document.getElementById('immersion').innerHTML = data[lang].immersion;
      document.getElementById('session').innerHTML = data[lang].session;
      document.getElementById('stage').innerHTML = data[lang].stage;
      document.getElementById('immersion1').innerHTML = data[lang].immersion1;
      document.getElementById('immersion2').innerHTML = data[lang].immersion2;
      document.getElementById('immersion3').innerHTML = data[lang].immersion3;
      document.getElementById('session1').innerHTML = data[lang].session1;
      document.getElementById('session2').innerHTML = data[lang].session2;
      document.getElementById('stage1').innerHTML = data[lang].stage1;
      document.getElementById('stage2').innerHTML = data[lang].stage2;
      document.getElementById('stage3').innerHTML = data[lang].stage3;

      //Mon Portfolio
      document.getElementById('titlePortfolio').innerHTML = data[lang].titlePortfolio;
      document.getElementById('card1').innerHTML = data[lang].card1;
      document.getElementById('card2').innerHTML = data[lang].card2;
      document.getElementById('titlePortfolio2').innerHTML = data[lang].titlePortfolio2;
      document.getElementById('card3').innerHTML = data[lang].card3;
      document.getElementById('card4').innerHTML = data[lang].card4;
      document.getElementById('card5').innerHTML = data[lang].card5;
      document.getElementById('card6').innerHTML = data[lang].card6;
      document.getElementById('card7').innerHTML = data[lang].card7;
      document.getElementById('card8').innerHTML = data[lang].card8;

      //Ma Formation
      document.getElementById('titleFormation').innerHTML = data[lang].titleFormation;
      document.getElementById('formation1').innerHTML = data[lang].formation1;
      document.getElementById('formation2').innerHTML = data[lang].formation2;
      document.getElementById('formation3').innerHTML = data[lang].formation3;
      document.getElementById('formation4').innerHTML = data[lang].formation4;

      //Contact
      document.getElementById('titleContact').innerHTML = data[lang].titleContact;
      document.getElementById('contact1').innerHTML = data[lang].contact1;
      document.getElementById('contact2').innerHTML = data[lang].contact2;
      document.getElementById('contact3').innerHTML = data[lang].contact3;
      document.getElementById('contact4').innerHTML = data[lang].contact4;
      document.getElementById('contactButton').innerHTML = data[lang].contactButton;

      document.getElementById('contact5').innerHTML = data[lang].contact5;
      document.getElementById('contact6').innerHTML = data[lang].contact6;


      
      

      

    })
    .catch(error => console.error('Erreur lors du chargement des traductions:', error));
}



function updateIcon(lang) {
  const langIcon = document.getElementById('langIcon');
  
  if (lang === 'fr') {
    langIcon.src = "images/français.jpg";
    langIcon.alt = "Langue actuelle: Français";
  } else {
    langIcon.src = "images/anglais.jpg";
    langIcon.alt = "Current language: English";
  }
}

document.getElementById("toggleButton").addEventListener("click", function() {

  currentLanguage = (currentLanguage === 'fr') ? 'en' : 'fr';
  loadTranslations(currentLanguage);
  updateIcon(currentLanguage);
});

loadTranslations(currentLanguage);
updateIcon(currentLanguage);


    //Email js pour envoyer les mails 

    document.addEventListener('DOMContentLoaded', function() {
        const form = document.getElementById('contact-form');
        const confirmationMessage = document.getElementById('confirmation-message');
        const sendingMessage = document.getElementById('sending-message');
        
        emailjs.init("Xr1CR-irF8-QLAcTO");
        
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            
            console.log('Form submitted');
            
            
            form.style.display = 'none';
            sendingMessage.style.display = 'block';
            
            emailjs.sendForm('service_a9jm7uh', 'template_ru317cl', this)
                .then(function() {
                    console.log('Email sent successfully');
                    
                    
                    sendingMessage.style.display = 'none';
                    confirmationMessage.style.display = 'block';
                }, function(error) {
                    console.log('Error sending email', error);
                    
                    
                    sendingMessage.style.display = 'none';
                    form.style.display = 'block';
                    alert('Erreur lors de l\'envoi du message : ' + JSON.stringify(error));
                });
        });
    });
    
    
    
    
    