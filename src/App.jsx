import { Text } from "./components/atoms";
import { Body } from "./components/layout";
import { Home } from "./pages/Home";

function App() {
  return (
    <>
      <Home />
    </>
  );
}

export default App;

// function App() {
//   return (
//     <Body>
//       <Text as="h1">Hola a todos</Text>
//       <Text>Buenas tardes</Text>
//       <ul>
//         <Text as="li">A</Text>
//         <Text as="li">B</Text>
//         <Text as="li">C</Text>
//       </ul>
//     </Body>
//   )
// }

// export default App
