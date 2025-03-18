import React, { createContext, useState, useContext } from "react";

const LanguageContext = createContext();

export const LanguageProvider = ({ children }) => {
    const [language, setLanguage] = useState(localStorage.getItem("language") || "es");

    const translations = {
        es: {
            aboutMe: "SOBRE MÍ",
            contact: "CONTACTO",
            aboutMeTitle: "SOBRE MÍ",
            aboutMeText: `
                Eleazar Ubieda es un director y guionista nacido y criado en Venezuela. En 2013 rodó su primer
                cortometraje titulado “Nueva Hostia”, que ganó el premio a la Mejor Dirección de Fotografía en la
                XXlX Muestra Audiovisual de la Universidad Rafael Belloso Chacín en Maracaibo, Venezuela
                en diciembre de 2013, casa de estudios donde cursó el grado en Periodismo Audiovisual. También
                éste cortometraje participó en el 3er Festival Audiovisual Universitario “Voy Corto” en enero de
                2015, donde fue proyectado en el icónico Teatro Baralt de Maracaibo (lugar donde se realizó la
                primera proyección cinematográfica en la historia de Latinoamérica).<br /><br />
                En 2016 emigró a España debido a la delicada situación de su país y para continuar su formación
                en cine, donde asistió a la Escola de Cinema y Audiovisuals de Catalunya (ESCAC) para formarse
                en el Máster de Dirección Cinematográfica, luego recibió una beca completa por parte de la
                misma casa de estudios para cursar el Máster en Dirección de Fotografía en 2017.<br /><br />
                A mediados de 2020 estrenó su primer cortometraje producido en España “El Libro de Mormón”,
                el cual fue seleccionado en 7 festivales internacionales de cine en 7 países distintos (Canadá,
                Italia, Alemania, Estados Unidos, Reino Unido, Chile y Grecia), y ganó un premio al Mejor Guión
                en el Alternative Film Festival de Toronto, Canadá en 2020, asimismo quedó como semifinalista en
                el Festival del Cinema di Cefalù de Italia en 2021.<br /><br />
                También a finales de 2020 estrena su segundo cortometraje producido en España, titulado
                “TECHNO-HAUS”, el cual fue seleccionado en el Notodofilmfest 2020 en España, en el Lift-Off
                Global Network Sessions 2021 en el Reino Unido y en el festival RENUAC 2022 en Santiago de
                Chile.<br /><br />
                A principios de 2021 estrena “ENDLESSTAIRS”, su tercer cortometraje producido en España, el
                cual fue seleccionado en el festival Subtravelling 2021, organizado por el Metro de Barcelona
                (España) en conjunto con el Metro de Seúl (República de Corea). También fue seleccionado en el
                festival zeitimpuls shortfilm 2021 en Vienna, Austria asimismo en el First-Time Filmmaker
                Sessions Volume 2 en el Reino Unido en 2022, y en el festival RENUAC 2022 en Santiago de
                Chile.<br /><br />
                A la par de ir haciendo sus proyectos fílmicos personales, a lo largo de los años ha colaborado
                con otros cineastas en sus producciones como lo fue en la ópera prima de Eva Fontanals “El
                Mundo de Ángeles Santos” (2017), largometraje documental que fue estrenado en Televisión
                Española, en el cual realizó los roles de cámara y asistente en edición y postproducción. También
                participó como Asistente de Dirección en “ROCCO”, cortometraje de Gerard Nogueira, premiado
                en el festival Camerimage en Polonia en 2017, y en otros diversos proyectos audiovisuales
                realizados a lo largo de los últimos años.<br /><br />
                En 2019 trabajó como reportero audiovisual para la revista SPublico, redactando, filmando y
                editando más de 40 reportajes de índole periodístico.<br /><br />
                Asimismo a la vez de complementar sus proyectos cinematográficos y colaborar en otros, ha sido
                realizador de diversas piezas audiovisuales de índole comercial como freelancer a nivel de
                conceptualización, realización y edición para distintas marcas y proyectos internacionales como lo
                son: American Panda (USA/China), Jungle Surf Safaris (Portugal), Surarquia (España), y otras
                más.
            `,
            contactTitle: "CONTACTO",
            nameLabel: "Nombre",
            namePlaceholder: "Tu nombre",
            emailLabel: "Email",
            emailPlaceholder: "Tu email",
            messageLabel: "Mensaje",
            messagePlaceholder: "Escribe tu mensaje aquí",
            sendButton: "Enviar",
            successMessage: "Mensaje enviado con éxito",
            errorMessage: "Error al enviar el mensaje. Por favor, intenta de nuevo.",
            mormonTitle: "EL LIBRO DE MORMÓN",
            mormonSubtitle: "ESCRITO Y DIRIGIDO POR ELEAZAR UBIEDA",
            mormonTextTitle: "Seleccionado en siete festivales de cine internacionales entre 2020 y 2022:",
            mormonWinnerLabel: "Ganador del mejor guión:",
            mormonWinnerText: "Alternative Film Festival 2020 en Toronto, Canadá",
            mormonSelectionLabel: "Selección Oficial:",
            mormonSelectionBerlin: "Berlin Flash Film Festival 2020 en Berlín, Alemania",
            mormonSelectionLiftOff2020: "Lift-Off Global Network 2020 en Reino Unido",
            mormonSemifinalistLabel: "Semi finalista:",
            mormonSemifinalistText: "Festival del Cinema di Cefalù 2021 en Cefalù, Italia",
            mormonSelectionAmLatino: "LETNetworks' AmLatino Film Festival 2021 en Rockland, Estados Unidos",
            mormonSelectionRenuac: "Festival Renuac 2022 en Santiago de Chile",
            mormonSelectionAsto: "17th International Asto Short Film Festival 2022 en Patras, Grecia",
            endlessTitle: "ENDLESSTAIRS",
            endlessSubtitle: "ESCRITO Y DIRIGIDO POR ELEAZAR UBIEDA",
            endlessTextTitle: "Seleccionado en cuatro festivales de cine internacionales entre 2021 y 2022:",
            endlessSelectionLabel: "Selección Oficial en:",
            endlessSelectionSubtravelling: "Subtravelling International Short Film Festival 2021 en Barcelona, España/ Seúl, Corea",
            endlessSelectionZeitimpuls: "Zeitimpuls shortfilm festival 2021 en Viena, Austria",
            endlessSelectionLiftOff2022: "Lift-Off Global Network 2022 en Reino Unido",
            endlessSelectionRenuac: "Festival Renuac 2022 en Santiago de Chile",
            redrumTitle: "REDRUM",
            redrumSubtitle: "BY NAGORE GONZÁLEZ",
            redrumText: `
                Tras el diseño y la confección de su última colección hace un par de años atrás, Nagore recurrió a
                mis servicios para la dirección y realización de éste fashion film, con pinceladas de una estética
                kitsch acompañada de una cinematografía un tanto bizarra.<br /><br />
                Fui el realizador, director, director de fotografía, operador de cámara, gaffer, editor y colorista de
                ésta pieza, bajo las nociones artísticas y estéticas que Nagore planteó en su colección titulada
                REDRUM. El montaje de éste fashion film fue inspirado en la Nouvelle Vague, con repeticiones
                minuciosamente calculadas en diversos momentos de la sucesión de la pieza para remarcar
                elementos específicos en la confección de las distintas piezas de vestuario de dicha colección.<br /><br />
                El sentido de éste fashion film era la promoción de REDRUM de Nagore González, previo a su
                paso por pasarelas de moda (runways) tanto locales como internacionales.<br /><br />
                <strong>Cliente:</strong> Nagore González<br /><br />
                <strong>Localización:</strong> Barcelona, España
            `,
            cortosTitle: "CORTOS EN GRANDE 2020",
            cortosSubtitle: "SPOT OFICIAL",
            cortosText: `
                Éste proyecto llegó a mí de las manos de José Gil, quien es el fundador y director del festival
                Cortos en Grande, festival internacional de cortometrajes radicado entre Santiago y Valparaíso en
                Chile.<br /><br />
                Conceptualicé, desarrollé y edité lo que sería éste spot que serviría para promocionar el festival
                en redes sociales e internet en general y que fue expuesto en la inauguración del festival en
                Santiago de Chile proyectado en pantalla grande y también transmitido en línea.<br /><br />
                Realicé éste vídeo recopilando absolutamente todos los cortometrajes participantes del festival,
                visionándolos, seleccionando trozos de los mismos y según el concepto que tracé fui plasmando
                partes de dichas películas a lo largo de éste spot para darle una forma narrativa y llamativa que
                atrajera al público internacional al festival, el cual era el objetivo principal de ésta pieza.<br /><br />
                <strong>Cliente:</strong> Cortos en Grande<br /><br />
                <strong>Localización:</strong> Santiago/ Valparaíso, Chile
            `,
            jungleTitle: "JUNGLE SURF SAFARIS",
            jungleSubtitle: "PROMO VIDEO",
            jungleText: `
                Ésta vez Jungle Surf Safaris acudió a mi para que realizara éste video promocional, con el fin de
                tener una presencia más sólida en la internet y redes sociales, y por supuesto, promocionar sus
                servicios de tours de iniciación en el surf para principiantes en las hermosas playas del silvestre y
                colorido Algarve en el sur de Portugal.<br /><br />
                Fui el realizador íntegro de ésta pieza, dirigiéndola, haciendo la dirección de fotografía y operación
                de cámara, para posteriormente editarla, corregirla a nivel de color y componer, grabar y mezclar
                la música que hice específicamente para éste vídeo.<br /><br />
                Mi idea fue plasmar la aventura que supone el ir de excursión por el Algarve para iniciarse y
                sumergirse en el mundo del surf, de la mano de amigables y expertos instructores que te llevarán
                de la mano con la mejor de las vibras a montar tu primera ola, bajo el exquisito paisaje que
                brindan las maravillosas playas como lo son Vale Figueiras, y muchas otras de la zona.<br /><br />
                <strong>Cliente:</strong> Jungle Surf Safaris<br /><br />
                <strong>Localización:</strong> Lagos, Portugal
            `,
            pandaTitle: "AMERICAN PANDA",
            pandaSubtitle: "PROMO VIDEO FOR CHINESE MARKET",
            pandaText: `
                Arnoldo Hurtado, creador y director de American Panda, acudió a mis servicios para realizar un
                vídeo promocional para su escuela de inglés online, tomando como target el mercado chino. El
                objetivo era captar nuevos clientes del Gran Gigante Asiático para su escuela especializada en
                enseñar inglés a infantes a distancia.<br /><br />
                Guionicé, dirigí, hice la dirección de fotografía, operación de cámara, gaffer y captación de sonido,
                para posteriormente editar, corregir color y diseñar el sonido de ésta pieza.<br /><br />
                La idea era transmitir algo fresco y llamativo, mostrando con detalle el dinamismo y eficacia del
                producto que en éste caso estaba relacionado a la enseñanza en línea, también detallando la
                facilidad de adquisición a través de una simulación de compra por medio de una plataforma de
                pago china, todo con una estética y vibra infantil, ya que el producto era destinado para los
                pequeños de la casa, sin dejar a un lado ese tono de profesionalidad que llamaría la atención a
                sus padres, quiénes al final serían los que contratarían éste servicio que provee American Panda.<br /><br />
                <strong>Cliente:</strong> American Panda<br /><br />
                <strong>Localización:</strong> Barcelona, España
            `,
            danzaTitle: "CLASES DE BAILE CON ALEJANDRO ALTAMIRANO",
            danzaSubtitle: "PROMO VIDEO",
            danzaText: `
                En ésta ocasión Alejandro me contactó porque necesitaba un vídeo promocional de sus clases de
                baile, para promocionarlas a través de redes sociales e internet.<br /><br />
                Hice de realizador, director de fotografía y operador de cámara, y también grabé sonido directo del
                piano, para posteriormente hacer el trabajo de montaje y edición.<br /><br />
                Quise hacer algo fuera de lo común y decidí dirigirme hacía lo experimental en ésta pieza,
                creando una sensación de intimidad dentro de la clase de baile y los bailarines, junto con la
                interpretación musical en directo, cosa que me llamó mucho la atención de su propuesta de
                clases.<br /><br />
                <strong>Cliente:</strong> Alejandro Altamirano<br /><br />
                <strong>Localización:</strong> Barcelona, España
            `,
            motionTitle: "MOTION GRAPHICS AND ANIMATION PORTFOLIO",
            motionSubtitle: "PROMO VIDEO",
            motionText: `
                Esto es una recopilación de varios trabajos que he hecho en la parte de animación y motion
                graphics a través del uso de softwares como Adobe After Effects y DaVinci Resolve.<br /><br />
                Como se puede evidenciar hay varias técnicas utilizadas en cada fragmento, como lo son: la
                metamorfosis entre letras y formas, la rotoscopia, el uso de máscaras y estilización de color,
                animación de caracteres y creación desde cero de interfaces a nivel visual.
            `,
            sura2Title: "SURARQUIA 2",
            sura2Subtitle: "PROMO REELS",
            suraTitle: "SURARQUIA",
            suraSubtitle: "PROMO REELS",
            suraText: `
                Felipe y Alejandro llegaron a mí para que realizara un par de reels promocionales para Instagram
                y TikTok, de su nueva e interesante propuesta con la que estaban recién emprendiendo: bolsos
                hechos a mano y diseñados por hombres, bajo el nombre de la marca “Surarquia”.<br /><br />
                Conceptualicé, dirigí, hice la dirección de fotografía y operación de cámara, gaffer, grabé detalles
                sonoros, para posteriormente editar y corregir de color éstas piezas de la mano con lo que ellos
                me pedían que era básicamente mostrar un poco el proceso de handcrafting y diseño de los
                bolsos.<br /><br />
                Quise crear un aura de intimidad relacionada al proceso de realización, desde el taller dónde a
                mano maquetan, diseñan, fabrican y posteriormente estilizan estos bolsos que venden en su
                tienda física en Barcelona, y en la página web de la marca.<br /><br />
                <strong>Cliente:</strong> Surarquia<br /><br />
                <strong>Localización:</strong> Barcelona, España
            `,
            dollTitle: "DOLLHOUSE DISCO",
            dollSubtitle: "PROMO REELS",
            dollText: `
                Rosie es una reconocida dj en la escena nocturna actual en Barcelona, bajo su seudónimo Stacey
                Cute organiza fiestas electrónicas feministas, donde el propósito es exponer el trabajo artístico de
                distintas mujeres en el ámbito musical, visual e incluso estético a nivel de tatuajes y diseño de
                uñas acrílicas.<br /><br />
                Bajo el nombre de “Dollhouse Disco” se dan estas fiestas en distintas locaciones en la ciudad
                cada cierto tiempo, y Rosie quiso que yo retratara la esencia de estos eventos, de una forma
                auténtica y global de todo lo que reúnen estas fiestas.<br /><br />
                Conceptualicé y grabé para luego editar y corregir a nivel de color en un formato de 9:16 para
                Instagram y TikTok, lo cuál era el propósito de ésta pieza, la promoción de dichos eventos en
                redes sociales.<br /><br />
                <strong>Cliente:</strong> Dollhouse Disco<br /><br />
                <strong>Localización:</strong> Barcelona, España
            `,
            copyright: "© 2025 ELEAZAR UBIEDA"
        },
        en: {
            aboutMe: "ABOUT ME",
            contact: "CONTACT",
            aboutMeTitle: "ABOUT ME",
            aboutMeText: `
                Eleazar Ubieda is a director and screenwriter born and raised in Venezuela. In 2013, he filmed his first
                short film, Nueva Hostia, which won the Best Cinematography award at the XXIX Audiovisual Showcase
                of the Rafael Belloso Chacín University in Maracaibo, Venezuela, in December 2013. This is also the
                institution where he completed his degree in Audiovisual Journalism. The short film was also selected
                for the 3rd University Audiovisual Festival "Voy Corto" in January 2015, where it was screened at the
                iconic Baralt Theater in Maracaibo (the site of the first film screening in Latin American history).<br /><br />
                In 2016, he emigrated to Spain due to the delicate situation in his country and to continue his film
                education. He attended the Escola de Cinema i Audiovisuals de Catalunya (ESCAC), where he completed
                a Master’s in Film Directing. Later, he received a full scholarship from the same institution to pursue
                a Master’s in Cinematography in 2017.<br /><br />
                In mid-2020, he premiered his first short film produced in Spain, El Libro de Mormón, which was selected
                for seven international film festivals in seven different countries (Canada, Italy, Germany, the United
                States, the United Kingdom, Chile, and Greece). The film won Best Screenplay at the Alternative Film
                Festival in Toronto, Canada, in 2020 and was also a semifinalist at the Festival del Cinema di Cefalù
                in Italy in 2021.<br /><br />
                At the end of 2020, he premiered his second short film produced in Spain, TECHNO-HAUS, which was
                selected for the Notodofilmfest 2020 in Spain, the Lift-Off Global Network Sessions 2021 in the United
                Kingdom, and the RENUAC 2022 festival in Santiago, Chile.<br /><br />
                In early 2021, he released ENDLESSTAIRS, his third short film produced in Spain. It was selected for
                the Subtravelling 2021 festival, organized by the Barcelona Metro (Spain) in collaboration with the
                Seoul Metro (South Korea). It was also selected for the Zeitimpuls Shortfilm Festival 2021 in Vienna,
                Austria, the First-Time Filmmaker Sessions Volume 2 in the United Kingdom in 2022, and the RENUAC
                2022 festival in Santiago, Chile.<br /><br />
                While developing his personal film projects, he has collaborated over the years with other filmmakers
                on their productions. He worked on Eva Fontanals' feature documentary debut, El Mundo de Ángeles
                Santos (2017), which premiered on Televisión Española, serving as a camera operator and assistant
                in editing and post-production. He also worked as Assistant Director on ROCCO, a short film by Gerard
                Nogueira, which won an award at the Camerimage festival in Poland in 2017, as well as on various
                other audiovisual projects in recent years.<br /><br />
                In 2019, he worked as an audiovisual reporter for SPublico magazine, writing, filming, and editing
                over 40 journalistic reports.<br /><br />
                Alongside his cinematic projects and collaborations, he has also worked as a freelancer, creating
                various audiovisual pieces for commercial purposes. He has been responsible for conceptualization,
                production, and editing for different international brands and projects, including American Panda
                (USA/China), Jungle Surf Safaris (Portugal), Surarquia (Spain), among others.
            `,
            contactTitle: "CONTACT",
            nameLabel: "Name",
            namePlaceholder: "Your name",
            emailLabel: "Email",
            emailPlaceholder: "Your email",
            messageLabel: "Message",
            messagePlaceholder: "Write your message here",
            sendButton: "Send",
            successMessage: "Message sent successfully",
            errorMessage: "Error sending message. Please try again.",
            mormonTitle: "THE BOOK OF MORMON",
            mormonSubtitle: "SHORT FILM WRITTEN AND DIRECTED BY ELEAZAR UBIEDA",
            mormonTextTitle: "Selected at seven international film festivals between 2020 and 2022:",
            mormonWinnerLabel: "Winner of Best Screenplay at:",
            mormonWinnerText: "Alternative Film Festival 2020 in Toronto, Canada",
            mormonSelectionLabel: "Official Selection at:",
            mormonSelectionBerlin: "Berlin Flash Film Festival 2020 in Berlin, Germany",
            mormonSelectionLiftOff2020: "Lift-Off Global Network 2020 in the United Kingdom",
            mormonSemifinalistLabel: "Semi-finalist at:",
            mormonSemifinalistText: "Festival del Cinema di Cefalù 2021 in Cefalù, Italy",
            mormonSelectionAmLatino: "LETNetworks' AmLatino Film Festival 2021 in Rockland, United States",
            mormonSelectionRenuac: "Festival Renuac 2022 in Santiago, Chile",
            mormonSelectionAsto: "17th International Asto Short Film Festival 2022 in Patras, Greece",
            endlessTitle: "ENDLESSTAIRS",
            endlessSubtitle: "SHORT FILM WRITTEN AND DIRECTED BY ELEAZAR UBIEDA",
            endlessTextTitle: "Selected at four international film festivals between 2021 and 2022:",
            endlessSelectionLabel: "Official Selection at:",
            endlessSelectionSubtravelling: "Subtravelling International Short Film Festival 2021 in Barcelona, Spain/ Seoul, South Korea",
            endlessSelectionZeitimpuls: "zeitimpuls shortfilm Festival 2021 in Vienna, Austria",
            endlessSelectionLiftOff2022: "Lift-Off Global Network 2022 in the United Kingdom",
            endlessSelectionRenuac: "Festival Renuac 2022 in Santiago, Chile",
            redrumTitle: "REDRUM",
            redrumSubtitle: "BY NAGORE GONZÁLEZ",
            redrumText: `
                After designing and crafting her latest collection a couple of years ago, Nagore turned to my services
                for the direction and creation of this fashion film, featuring touches of a kitsch aesthetic combined
                with somewhat bizarre cinematography.<br /><br />
                I was the director, cinematographer, camera operator, gaffer, editor, and colorist for this piece,
                working with the artistic and aesthetic concepts Nagore presented in her collection titled <i>REDRUM</i>.
                The editing of this fashion film was inspired by the French New Wave, with meticulously calculated
                repetitions at various points throughout the piece to highlight specific elements in the making of
                the different garments from the collection.<br /><br />
                The purpose of this fashion film was to promote <i>REDRUM</i> by Nagore González ahead of its
                presentation on fashion runways, both locally and internationally.<br /><br />
                <strong>Client:</strong> Nagore González<br /><br />
                <strong>Location:</strong> Barcelona, Spain
            `,
            cortosTitle: "CORTOS EN GRANDE 2020",
            cortosSubtitle: "OFFICIAL SPOT",
            cortosText: `
                This project came to me through José Gil, the founder and director of the <i>Cortos en Grande</i>
                festival, an international short film festival based in Santiago and Valparaíso, Chile.<br /><br />
                I conceptualized, developed, and edited this spot, which would serve to promote the festival on
                social media and the internet in general. It was showcased during the festival's inauguration in
                Santiago, Chile, projected on a big screen, and also streamed online.<br /><br />
                I created this video by gathering all the short films participating in the festival, watching them,
                selecting segments, and, based on the concept I developed, incorporating parts of those films
                throughout the spot to give it a narrative and engaging form that would attract an international
                audience to the festival—this was the main goal of the piece.<br /><br />
                <strong>Client:</strong> Cortos en Grande<br /><br />
                <strong>Location:</strong> Santiago/Valparaíso, Chile
            `,
            jungleTitle: "JUNGLE SURF SAFARIS",
            jungleSubtitle: "PROMO VIDEO",
            jungleText: `
                This time, Jungle Surf Safaris reached out to me to create this promotional video in order to establish
                a stronger presence on the internet and social media, and of course, promote their beginner surf tour
                services at the beautiful, wild, and colorful beaches of the Algarve in southern Portugal.<br /><br />
                I was the sole creator of this piece, directing it, handling cinematography and camera operation, and
                then editing, color-correcting, and composing, recording, and mixing the music I made specifically
                for this video.<br /><br />
                My idea was to capture the adventure of exploring the Algarve as a beginner, immersing yourself in
                the world of surfing with the guidance of friendly and experienced instructors who will lead you
                with the best vibes to catch your first wave, all set against the stunning landscapes of beaches like
                Vale Figueiras and many others in the area.<br /><br />
                <strong>Client:</strong> Jungle Surf Safaris<br /><br />
                <strong>Location:</strong> Lagos, Portugal
            `,
            pandaTitle: "AMERICAN PANDA",
            pandaSubtitle: "PROMO VIDEO FOR CHINESE MARKET",
            pandaText: `
                Arnoldo Hurtado, creator and director of American Panda, sought my services to create a promotional
                video for his online English school, targeting the Chinese market. The goal was to attract new clients
                from the vast Asian Giant for his school, which specializes in teaching English to children remotely.<br /><br />
                I wrote the script, directed, handled cinematography, camera operation, worked as a gaffer, and
                captured the sound, then proceeded to edit, color-correct, and design the sound for this piece.<br /><br />
                The idea was to convey something fresh and engaging, showing in detail the dynamism and effectiveness
                of the product, which in this case was related to online education. I also highlighted the ease of
                acquiring the service through a simulation of a purchase via a Chinese payment platform. All of this
                was done with a childlike aesthetic and vibe, as the product was aimed at young children, while still
                maintaining a sense of professionalism that would catch the attention of their parents, who would
                ultimately be the ones to purchase the service provided by American Panda.<br /><br />
                <strong>Client:</strong> American Panda<br /><br />
                <strong>Location:</strong> Barcelona, Spain
            `,
            danzaTitle: "DANCE CLASSES WITH ALEJANDRO ALTAMIRANO",
            danzaSubtitle: "PROMO VIDEO",
            danzaText: `
                This time, Alejandro reached out to me because he needed a promotional video for his dance classes
                to advertise them on social media and the internet.<br /><br />
                I took on the roles of director, cinematographer, and camera operator, as well as recording live piano
                sound, before handling the editing and post-production work.<br /><br />
                I wanted to create something unconventional, so I leaned towards an experimental approach in this
                piece. My goal was to evoke a sense of intimacy between the dance class, the dancers, and the live
                musical interpretation—an element of his teaching method that truly caught my attention.<br /><br />
                <strong>Client:</strong> Alejandro Altamirano<br /><br />
                <strong>Location:</strong> Barcelona, Spain
            `,
            motionTitle: "MOTION GRAPHICS AND ANIMATION PORTFOLIO",
            motionSubtitle: "PROMO VIDEO",
            motionText: `
                This is a compilation of various works I have done in animation and motion graphics using softwares
                such as Adobe After Effects and DaVinci Resolve.<br /><br />
                As can be seen, different techniques have been used in each segment, including metamorphosis
                between letters and shapes, rotoscoping, the use of masks and color stylization, character animation,
                and the creation of visual interfaces from scratch.
            `,
            sura2Title: "SURARQUIA 2",
            sura2Subtitle: "PROMO REELS",
            suraTitle: "SURARQUIA",
            suraSubtitle: "PROMO REELS",
            suraText: `
                Felipe and Alejandro approached me to create a couple of promotional reels for Instagram and TikTok
                for their new and exciting venture: handcrafted bags designed by men, under the brand name <i>Surarquia</i>.<br /><br />
                I conceptualized, directed, handled cinematography and camera operation, worked as a gaffer,
                recorded sound details, and then edited and color-corrected these pieces—closely aligning with their
                vision, which was primarily to showcase the handcrafting and design process of the bags.<br /><br />
                I aimed to create an intimate atmosphere connected to the creation process, capturing the workshop
                where they manually sketch, design, craft, and later style these bags, which are sold in their physical
                store in Barcelona and on the brand’s website.<br /><br />
                <strong>Client:</strong> Surarquia<br /><br />
                <strong>Location:</strong> Barcelona, Spain
            `,
            dollTitle: "DOLLHOUSE DISCO",
            dollSubtitle: "PROMO REELS",
            dollText: `
                Rosie is a well-known DJ in Barcelona's current nightlife scene. Under her pseudonym, Stacey Cute,
                she organizes feminist electronic parties with the goal of showcasing the artistic work of various
                women in the fields of music, visual arts, and even aesthetics, including tattoos and acrylic nail design.<br /><br />
                These events, called <i>Dollhouse Disco</i>, take place in different locations across the city from time
                to time. Rosie wanted me to capture the essence of these parties in an authentic and comprehensive
                way, reflecting everything they bring together.<br /><br />
                I conceptualized and filmed the project, then edited and color-corrected it in a 9:16 format for Instagram
                and TikTok, as the main goal of this piece was to promote the events on social media.<br /><br />
                <strong>Client:</strong> Dollhouse Disco<br /><br />
                <strong>Location:</strong> Barcelona, Spain
            `,
            copyright: "© 2025 ELEAZAR UBIEDA"
        }
    };

    const handleLanguageChange = (lang) => {
        setLanguage(lang);
        localStorage.setItem("language", lang);
    };

    return (
        <LanguageContext.Provider value={{ language, setLanguage: handleLanguageChange, t: translations[language] }}>
            {children}
        </LanguageContext.Provider>
    );
};

export const useLanguage = () => useContext(LanguageContext);