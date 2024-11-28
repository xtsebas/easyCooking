import './home.css'
import Card from '../../Card/Card'
import pizza from '../../assets/example/pizza.jpg';
import pastel from '../../assets/example/pastel.jpg'

type Comment = {
    name: string;
    content: string;
    date: Date;
};

type Recipe = {
    Title: string;
    image: string;
    comments: Comment[];
    rating: number;
};

const Home = () => {

    const dummyRecipes: Recipe[] = [
        {
            Title: 'Pizza',
            image: pizza,
            comments: [
                { name: 'John', content: 'Delicious!', date: new Date('2024-11-20') },
                { name: 'Jane', content: 'Perfect for dinner.', date: new Date('2024-11-21') }
            ],
            rating: 5
        },
        {
            Title: 'Pastel',
            image: pastel,
            comments: [
                { name: 'Alice', content: 'So sweet and tasty!', date: new Date('2024-11-22') },
                { name: 'Bob', content: 'Would recommend.', date: new Date('2024-11-23') }
            ],
            rating: 3.5
        }
    ];
    
    return (
        <div className='home'>
            {dummyRecipes.map((receta, index) => (
                <Card
                    key={index}
                    image={receta.image}
                    title={receta.Title}
                    comments={`${receta.comments.length} comments`}
                    rating={`${receta.rating.toString()} rating`}
                />
            ))}
        </div>
    )
};

export default Home;