// const arrayNum = [];
// function recursion() {
//     const numFromUser1=Number(prompt("choose a number"))
//   if (numFromUser1 % numFromUser1 == 0)
//       arrayNum.push(numFromUser1);
//   if(arrayNum.length<3)recursion()
//   return arrayNum;
// }
// console.log(recursion());

// // =====================================================================
// class Node {
//     constructor(data) {
//       this.data = data;
//       this.next = null;
//     }
//   }
//   // const NodeOne=new Node(200)
//   class LinkedList {
//     constructor() {
//       this.head = null;
//       this.tail = null;
//     }
//     addToHead(value) {
//       let newNode = new Node(value);
//       // console.log(newNode);
//       // !this.head==null
//       if (!this.head) {
//         this.head = newNode;
//         this.tail = newNode;
//       } else {
//           newNode.next = img.head;
//           img.head = newNode;
//           imgId.src = `${img.head.data}`;
//         };

//     }

//     addToEnd(value) {
//       let newNode = new Node(value);
//       // console.log(newNode);
//       // !this.head==null
//       if (!this.head) {
//         this.head = newNode;
//         this.tail = newNode;
//       } else {
//         this.tail.next = newNode;
//         this.tail = newNode;
//       }
//     }
//   }
//   const img = new LinkedList();
//   img.addToHead(
//     `https://cdn.pixabay.com/photo/2021/08/06/05/04/mountain-6525356__340.jpg`
//   );
//   img.addToHead(
//     `https://cdn.pixabay.com/photo/2020/03/12/22/26/drops-4926381__340.jpg`
//   );
//   img.addToHead(
//     `https://cdn.pixabay.com/photo/2020/06/13/03/40/flower-5292556__340.jpg`
//   );
//   img.addToHead(
//     `https://cdn.pixabay.com/photo/2021/09/26/14/37/milky-way-6657951__340.jpg`
//   );
//   console.log(img);
//   imgId.src = `${img.head.data}`;

//   let counter=img.head
//   btnNext.onclick = () => {
//     counter=counter.next
//     imgId.src = `${counter.data}`;
//     }

// ============================================
// לכל ילד יש ילד אחד
// const family = {
//   name: "mom 1",
//   child: {
//     name: "child 1",
//     child: {
//       name: "child 2",
//       child: {
//         name: "child 3",
//         child: {
//           name: "child 4",
//           child: {
//             name: "child 5",
//           },
//         },
//       },
//     },
//   },
// };

// //!depth first פונקציה כללית לעץ משפחתי
// function printNames(treeFamily) {
//   console.log(treeFamily.name);
//   if (treeFamily.child) printNames(treeFamily.child);
// }
// printNames(family);
// ============================================
// לכל ילד יש כמה ילדים
const family2 = {
  name: `generation 1`,
  children: [
    {
      name: `keren`,
    },
    {
      name: `eyal`,
      children: [
        {
          name: `agan`,
          children: [
            {
              name: `shirel`,
              children: [
                {
                  name: `benny`,
                },
              ],
            },
          ],
        },
      ],
    },
    {
      name: `generation anuder first child`,
    },
    {
      name: `generation 15 first child`,
    },

  ],
};

function printBigFamily(treeFamily) {
  //!מכניסים את השם הראשון
   console.log(treeFamily.name);
   //check if the object has children
  if (treeFamily.children)
  //if true iterate over the children array
  //!אם לילד יש עוד ילד לעשות מערך שרץ על הילדים שלו ומדפיסם אותם ולקרוא לפונקציה עד 
  //!שאין עוד ילדים וזה מפסיק לבד
    for (const item of treeFamily.children) {
      //reinvoke the function
      // reinvoke הכוונה להפעיל את הפונקציה מחדש
      printBigFamily(item);
    }
}
printBigFamily(family2);
// ============================================

const linux = {
  name: `/`,
  children: [
    {
      name: `/mnt/`,
    },
    {
      name: `/var/`,
      children: [
        {
          name: `/cache/`,
        },
        {
          name: `/log/`,
        },
        {
          name: `/spool/`,
        },
        {
          name: `/tmp/`,
        },
      ],
    },
    {
      name: `/media/`,
    },
    {
      name: `/usr/`,
      children:[
        {
          name: `/sbin/`,
        },
        {
          name: `/lib/`,
        },
        {
          name: `/include/`,
        },
        {
          name: `/bin/`,
        },
      ]
    },
    {
      name: `/lib/`,
    },
    {
      name: `/tmp/`,
    },
    {
      name: `/home/`,
    },
    {
      name: `/srv/`,
    },
    {
      name: `/etc/`,
    },
    {
      name: `/sbin/`,
    },
    {
      name: `/dev/`,
    },
    {
      name: `/root/`,
    },
    {
      name: `/boot/`,
    },
    {
      name: `/opt/`,
    },
    {
      name: `/bin/`,
    },
  ],
};
// function printDitels() {
//   div.innerText+= linux.name

// }

// function treeLinux(tree) {
//   div.innerHTML+= `<h3>${tree.name} </h3>`
//   console.log(tree.name);
//   if(tree.children)
//   for (const item of tree.children) {
//     treeLinux(item)
//   }
// }
// treeLinux(linux)

function rendor(node,container) {
  const div=document.createElement("div")
  div.innerHTML+=`<h3>${node.name} </h3>`
  container.appendChild(div);
  if(node.children)
  for (const item of node.children) {
    rendor(item,div)
  }
}
const container=document.getElementById("container")
rendor(linux,container)
