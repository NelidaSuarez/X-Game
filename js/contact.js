
        document.getElementById("contactForm").addEventListener("submit", async function(event) {
            event.preventDefault(); 
            
            const form = event.target;
            const formData = new FormData(form);
            const formMessage = document.getElementById("formMessage");
    
            try {
                
                const response = await fetch("https://formspree.io/f/xyzyjaoq", {
                    method: "POST",
                    body: formData,
                    headers: {
                        'Accept': 'application/json'
                    }
                });
    
                if (response.ok) {
                    formMessage.style.display = "block";
                    formMessage.textContent = "¡Gracias! Tu mensaje ha sido enviado.";
                    form.reset(); 
                } else {
                    formMessage.style.display = "block";
                    formMessage.style.color = "red";
                    formMessage.textContent = "Hubo un error al enviar el mensaje. Por favor, inténtalo de nuevo.";
                }
            } catch (error) {
                formMessage.style.display = "block";
                formMessage.style.color = "red";
                formMessage.textContent = "Hubo un problema con la conexión. Por favor, inténtalo más tarde.";
            }
        });
    