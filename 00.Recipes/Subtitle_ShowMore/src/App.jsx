// import { useState, useRef, useEffect } from "react";
// import "./App.css";

// function App() {
//   const subtitle =
//     "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti inventore eum nostrum repellat obcaecati quod impedit vero numquam iste? Consequuntur cupiditate cumque provident praesentium labore ipsa illo ad optio, aut quasi ipsam placeat reiciendis commodi obcaecati quisquam maiores architecto quod atque corporis, inventore excepturi. Non at dolore nulla nihil.";

//   const [subtitleHidden, setSubtitleHidden] = useState("");
//   const wrapperHiddenRef = useRef(null);

//   useEffect(() => {
//     let i = 0;
//     let currentText = "";
//     let lastHeight = 0;

//     const step = () => {
//       if (i < subtitle.length) {
//         currentText += subtitle[i];
//         setSubtitleHidden(currentText);
//         i++;

//         // ждём, пока React отрендерит, и проверим высоту
//         requestAnimationFrame(() => {
//           const height = wrapperHiddenRef.current?.offsetHeight || 0;

//           if (height !== lastHeight) {
//             console.log(`Height changed at index ${i - 1}:`, height);
//             lastHeight = height;
//           }

//           // продолжаем
//           step();
//         });
//       }
//     };

//     step();
//   }, [subtitle]);

//   return (
//     <>
//       <div className="wrapper">
//         <div className="text-calculate">{subtitle}</div>
//       </div>

//       <div ref={wrapperHiddenRef} className="invisible-wrapper">
//         <div className="text-calculate">{subtitleHidden}</div>
//       </div>
//     </>
//   );
// }

// export default App;

import { useEffect, useRef, useState } from "react";
import "./App.css";

function App() {
  const subtitle =
    "Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita deleniti inventore eum nostrum repellat obcaecati quod impedit vero numquam iste? Consequuntur cupiditate cumque provident praesentium labore ipsa illo ad optio, aut quasi ipsam placeat reiciendis commodi obcaecati quisquam maiores architecto quod atque corporis, inventore excepturi. Non at dolore nulla nihil.";

  const [visibleChars, setVisibleChars] = useState(0);
  const measureRef = useRef(null);

  useEffect(() => {
    const getHeight = (text) => {
      if (measureRef.current) {
        measureRef.current.textContent = text;
        return measureRef.current.offsetHeight;
      }
      return 0;
    };

    const baseHeight = getHeight("A"); // высота одной строки
    let low = 0;
    let high = subtitle.length;
    let twoLineHeight = baseHeight * 2;
    let result = 0;

    const binarySearch = () => {
      while (low <= high) {
        const mid = Math.floor((low + high) / 2);
        const currentText = subtitle.slice(0, mid);
        const height = getHeight(currentText);

        if (height <= twoLineHeight) {
          result = mid; // этот вариант подходит, пробуем больше
          low = mid + 1;
        } else {
          high = mid - 1; // слишком много — уменьшаем
        }
      }

      setVisibleChars(result);
      console.log(`В две строки помещается символов: ${result}`);
    };

    // Дождаться отрисовки DOM
    requestAnimationFrame(binarySearch);
  }, [subtitle]);

  return (
    <>
      <div className="wrapper">
        <div className="text-calculate">{subtitle.slice(0, visibleChars)}</div>
      </div>

      {/* Скрытый измеритель */}
      <div className="invisible-wrapper">
        <div className="text-calculate" ref={measureRef}></div>
      </div>
    </>
  );
}

export default App;
