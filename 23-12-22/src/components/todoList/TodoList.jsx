import { Text } from "../../atoms/text/Text";
import { Button } from "../../atoms/button/Button";
import './todoList.css';

export const TodoList = () => {

    const starters = [
        {  
           label: 'Panettone Gastronomico', 
           href: 'https://ricette.giallozafferano.it/Panettone-gastronomico.html', 
           description: 'Un antipasto maestoso e colorato perfetto da condividere, per arricchire la tavola Natalizia', 
           img: './public/images/panettone.jpg',
           favorites: false,
           id: 1
        },

        {  
           label: 'Vol-au-vent Ripieni', 
           href: 'https://ricette.giallozafferano.it/Vol-au-vent-ripieni.html', 
           description: 'I classici cestini di pasta sfoglia da farcire con diversi condimenti', 
           img:'',
           favorites: false, 
           id: 2
        },

        {
            label: 'Vitello Tonnato', 
            href: 'https://ricette.giallozafferano.it/Vitello-tonnato.html', 
            description: 'Una ricetta tipica del Piemonte, un antipasto semplice da preparare e che conquista tutti!', 
            img:'',
            favorites: false, 
            id: 3
        },

        {
            label: 'Cornetti Salati', 
            href: 'https://ricette.giallozafferano.it/Cornetti-salati.html', 
            description: "Semplici e veloci da fare, assemblateli anche all'ultimo momento per iniziare in maniera sfiziosa!", 
            img:'',
            favorites: false, 
            id: 4
        },

        {
            label: 'Cozze Gratinate', 
            href: 'https://ricette.giallozafferano.it/Cozze-gratinate.html', 
            description: 'Un saporito ripieno composto da mollica di pane, parmigiano e prezzemolo!', 
            img:'',
            favorites: false, 
            id: 5
        },

        {
            label: 'Barchette con baccalà mantecato', 
            href: 'https://ricette.giallozafferano.it/Barchette-con-baccala-mantecato.html', 
            description: 'Un goloso guscio croccante che farà gola a tutti!', 
            img:'',
            favorites: false, 
            id: 6
        }
    ];



    const mainCourses = [
        {
            label: 'Lasagne alla Bolognese', 
            href: 'https://ricette.giallozafferano.it/Lasagne-alla-Bolognese.html', 
            description: 'Tipicità e genuinità per un classico primo piatto natalizio!', 
            img:'./',
            favorites: false, 
            id: 1
        },

        {
            label: 'Cannelloni', 
            href: 'https://ricette.giallozafferano.it/Cannelloni.html', 
            description: 'Pasta fresca ripiena e arrotolata per accogliere un ripieno saporito!', 
            img:'',
            favorites: false, 
            id: 2
        },

        {
            label: 'Ravioli ricotta e spinaci', 
            href: 'https://ricette.giallozafferano.it/Ravioli-ricotta-e-spinaci.html', 
            description: 'Una delle preparazioni più conosciute e amate da tutti!', 
            img:'',
            favorites: false, 
            id: 3
        },

        {
            label: 'Conchiglioni ripieni di funghi, prosciutto e besciamella', 
            href: 'https://ricette.giallozafferano.it/Conchiglioni-ripieni-di-funghi-prosciutto-e-besciamella.html', 
            description: 'Goduriosi e ricchi per la vostra tavola imbandita!', 
            img:'',
            favorites: false, 
            id: 4
        },

        {
            label: 'Spaghetti allo scoglio', 
            href: 'https://ricette.giallozafferano.it/Spaghetti-allo-scoglio.html', 
            description: 'Un primo piatto di mare profumatissimo e gustoso che racchiude veri sapori!', 
            img:'',
            favorites: false, 
            id: 5
        },

        {
            label: 'Ravioli di pesce', 
            href: 'https://ricette.giallozafferano.it/Ravioli-di-pesce.htmlhttps://ricette.giallozafferano.it/Barchette-con-baccala-mantecato.html', 
            description: 'Un primo piatto cremoso e saporito, perfetto per il menu di Natale o Vigilia!', 
            img:'',
            favorites: false, 
            id: 6
        }
    ];

    const meats = [
        {
            label: 'Pollo ripieno al forno', 
            href: 'https://ricette.giallozafferano.it/Pollo-Ripieno-al-forno.html', 
            description: 'Pancetta e cipolla rendono la carne succulenta e il contorno di patate è irresistibile!', 
            img:'./',
            favorites: false, 
            id: 1
        },

        {
            label: 'Filetto in crosta', 
            href: 'https://ricette.giallozafferano.it/Filetto-in-crosta.html', 
            description: 'Un secondo piatto buono e molto scenografico!', 
            img:'',
            favorites: false, 
            id: 2
        },

        {
            label: "Anatra all'arancia", 
            href: 'https://ricette.giallozafferano.it/Anatra-all-arancia.html', 
            description: 'Conosciuta e apprezzata in tutto il mondo, dalla particolare cottura in forno!', 
            img:'',
            favorites: false, 
            id: 3
        },

        {
            label: 'Sformato di verdure', 
            href: 'https://ricette.giallozafferano.it/Sformato-di-verdure.html', 
            description: 'Parenti vegetariani alla tavola delle feste? Si sentiranno coccolati con questo ottimo sformato di verdure!', 
            img:'',
            favorites: false, 
            id: 4
        },

        {
            label: 'Fritto misto di pesce', 
            href: 'https://ricette.giallozafferano.it/Fritto-misto-di-pesce.html', 
            description: 'Preparato ocn gamberi, calamri e pesciolini misti, è un piatto unico di mare aprrezzato da grandi e piccini!', 
            img:'',
            favorites: false, 
            id: 5
        },

        {
            label: 'Orata al cartoccio', 
            href: 'https://ricette.giallozafferano.it/Orata-al-cartoccio.html', 
            description: 'Un secondo piatto di pesce velocissimo da preparare per assaporare tutto il buono del pesce!', 
            img:'',
            favorites: false, 
            id: 6
        }
    ];
 

    return <div className="recipes_list">
        <Text className="title">RICETTE NATALIZIE</Text>
            <ul>
                <Text as='h2'>Antipasti:</Text>
                {
                    starters.map(function (item) {
                        return (
                            <ul>
                               <li key={item.id}>
                                  <div className="card">
                                     <a className='recipe' href={item.href}>{item.label}</a>
                                     <Text as="p">{item.description}</Text>
                                     <Button className='card_btn' onClick={(item) => {
                                      alert('Aggiunto ai preferiti')}}
                                      >❤️</Button>
                                  </div>
                               </li>
                            </ul>
                        )
                    })
                }
                <Text as='h2'>Primi:</Text>
                {
                    mainCourses.map(function (item) {
                        return (
                            <li key={item.id}>
                                <div className="card">
                                  <a className='recipe' href={item.href}>{item.label}</a>
                                  <Text as="p">{item.description}</Text>
                                  <Button className='card_btn' onClick={(item) => {
                                      alert('Aggiunto ai preferiti')}}
                                      >❤️</Button>
                                </div>
                            </li>
                        )
                    })
                }
                <Text as='h2'>Secondi:</Text>
                {
                    meats.map(function (item) {
                        return (
                            <li key={item.id}>
                                <div className="card">
                                  <a className='recipe' href={item.href}>{item.label}</a>
                                  <Text as="p">{item.description}</Text>
                                  <Button>❤️</Button>
                                </div>
                            </li>
                        )
                    })
                }
            </ul>
    </div>
}