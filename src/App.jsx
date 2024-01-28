import './App.css'
import Button from "./components/Button.jsx";
import Bag1 from "./assets/bag_1.png";
import Bag2 from "./assets/bag_2.png";
import Bag3 from "./assets/bag_3.png";
import Bag4 from "./assets/bag_4.png";
import Brand from "./assets/brand.png";
import OurStory from "./assets/our_story.png";
import Product from "./components/Product.jsx";
import Tile from "./components/Tile.jsx";

// function toTheCollection() {
//   console.log('to the collection');
// }
//
// function shopAllBags() {
//   console.log('shop all bags');
// }
//
// function preOrders() {
//   console.log('pre-orders')
// }


function App() {
  return (
      <>
      <h1>Handbags & Purses</h1>
      <nav>
          <Button disabled={false} type='button' buttonText='To the collection' onClick={() => console.log('To the collection')}/>
          <Button disabled={false} type='button' buttonText='Shop all bags' onClick={() => console.log('Shop all bags')}/>
          <Button disabled={true} type='button' buttonText='pre-orders' onClick={() => console.log('pre-orders')}/>

      </nav>
        <main>
            <Product productLabel='Best seller' image={Bag1} productTitle='The handy bag' productPrice={400} alt='bag 1'/>
            <Product productLabel='Best seller' image={Bag2} productTitle='The stylish bag' productPrice={250} alt='bag 2'/>
            <Product productLabel='New collection' image={Bag3} productTitle='The simple bag' productPrice={300} alt='bag 3'/>
            <Product productLabel='New collection' image={Bag4} productTitle='The trendy bag' productPrice={150} alt='bag 4'/>
        </main>
          <footer>
              <Tile tileTitle='The Brand'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum
                     enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum
                      enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>
              <Tile tileImage={Brand} alt='Brand image'/>
              <Tile tileImage={OurStory} alt='Our story image'/>
              <Tile tileTitle='Our Story'>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum
                      enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid culpa dolorum
                      enim excepturi, fuga pariatur praesentium quia sequi similique sunt.</p>
              </Tile>
          </footer>
      </>
  )
}

export default App
