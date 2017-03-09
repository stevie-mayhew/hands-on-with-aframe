let activeSlide = 1;
let currentAction = 0;

const slideActions = {
  64: { // 64-add-rotate
    0: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '0 65 315',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
  },
  66: { // 67-models-code
    0: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 67 325.5',
        rotation: '0 0 0',
      },
      children: [
        {
          type: 'gltfModel',
          parameters: {
            scale: '0.3 0.3 0.3',
            src: '#brainstem',
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '0 360 0',
            repeat: 'indefinite',
          },
        },
      ],
    },
    1: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 67 324.5',
        rotation: '0 0 0',
      },
      children: [
        {
          type: 'colladaModel',
          parameters: {
            scale: '0.2 0.2 0.2',
            src: '#tree1',
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '0 360 0',
            repeat: 'indefinite',
          },
        },
      ],
    },
    2: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 67 324.5',
        rotation: '0 0 0',
      },
      children: [
        {
          type: 'colladaModel',
          parameters: {
            scale: '0.2 0.2 0.2',
            src: '#tree2',
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '0 360 0',
            repeat: 'indefinite',
          },
        },
      ],
    },
    3: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 67 325.5',
        rotation: '0 0 0',
      },
      children: [
        {
          type: 'objModel',
          parameters: {
            scale: '0.2 0.2 0.2',
            src: '#crate-obj',
            mtl: '#crate-mtl',
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '0 360 0',
            repeat: 'indefinite',
          },
        },
      ],
    },
  },

  70: { // 70-other-primitives
    0: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '2 70.5 344',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'sphere',
          parameters: {
            color: 'red',
            radius: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    1: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-2 70.5 344',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'cone',
          parameters: {
            color: 'blue',
            'radius-bottom': 1,
            'radius-top': 0.2,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    2: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '2 70.5 346',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'cylinder',
          parameters: {
            color: 'green',
            height: 2,
            radius: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },

    3: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-2 70.5 346',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'dodecahedron',
          parameters: {
            color: 'orange',
            radius: 1,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
  },


  71: { // 71-more-primitives
    0: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '2 71.5 349',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'icosahedron',
          parameters: {
            color: 'purple',
            radius: 1,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    1: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-2 71.5 349',
        rotation: '270 0 0',
      },
      children: [
        {
          type: 'ring',
          parameters: {
            color: 'pink',
            'radius-outer': 0.5,
            'radius-inner': 0.15,
          },
        },
      ],
    },
    2: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '2 71.5 351',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'tetrahedron',
          parameters: {
            color: 'yellow',
            radius: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },

    3: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-2 71.5 351',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'torus',
          parameters: {
            color: 'orange',
            radius: 1,
            'radius-tubular': 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
  },
  76: { // 75-thanks
    0: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '0 65 315',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    1: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 73 355',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    2: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 64 310',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    3: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 63 304',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    4: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 62 301',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    5: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 61 295',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    6: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 60 289',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    7: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 59 286',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    8: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 72.5 355',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    9: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 72.5 355',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    10: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 73.5 360',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    11: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 73.5 360',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    12: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '1.5 74.5 365',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    13: {
      complete: false,
      type: 'entity',
      parameters: {
        position: '-1.5 74.5 365',
        rotation: '45 45 45',
      },
      children: [
        {
          type: 'box',
          parameters: {
            src: '#stevie',
            width: 0.5,
            height: 0.5,
            depth: 0.5,
          },
        },
        {
          type: 'animation',
          parameters: {
            attribute: 'rotation',
            dur: '3000',
            fill: 'forward',
            easing: 'linear',
            to: '45 405 45',
            repeat: 'indefinite',
          },
        },
      ],
    },
    14: {
      complete: false,
      type: 'addControls',
    },
    15: {
      complete: false,
      type: 'showThanks',
    },
  },
};

class Actions {

  addEntities(type, parameters, children) {
    const entity = this[type](parameters);

    if (children) {
      children.forEach((child) => {
        const childEntity = this[child.type](child.parameters);
        entity.appendChild(childEntity);
      });
    }

    if (type !== 'addControls' && type !== 'showThanks') {
      const currentSlide = document.querySelector(`#slide-${activeSlide}`);
      currentSlide.appendChild(entity);
    }
  }

  addControls() {
    const camera = document.querySelector('#camera');
    camera.setAttribute('kinematic-body', true);
  }
  showThanks() {
    const finalSlide = document.querySelector('#finalslide');
    finalSlide.setAttribute('position', '0 150 0');
  }
  box(parameters) {
    const box = document.createElement('a-box');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        box.setAttribute(key, parameters[key]);
      }
    }
    return box;
  }
  sphere(parameters) {
    const sphere = document.createElement('a-sphere');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        sphere.setAttribute(key, parameters[key]);
      }
    }
    return sphere;
  }
  cone(parameters) {
    const cone = document.createElement('a-cone');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        cone.setAttribute(key, parameters[key]);
      }
    }
    return cone;
  }
  cylinder(parameters) {
    const cylinder = document.createElement('a-cylinder');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        cylinder.setAttribute(key, parameters[key]);
      }
    }
    return cylinder;
  }
  dodecahedron(parameters) {
    const dodecahedron = document.createElement('a-dodecahedron');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        dodecahedron.setAttribute(key, parameters[key]);
      }
    }
    return dodecahedron;
  }
  icosahedron(parameters) {
    const icosahedron = document.createElement('a-icosahedron');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        icosahedron.setAttribute(key, parameters[key]);
      }
    }
    return icosahedron;
  }
  ring(parameters) {
    const ring = document.createElement('a-ring');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        ring.setAttribute(key, parameters[key]);
      }
    }
    return ring;
  }
  tetrahedron(parameters) {
    const tetrahedron = document.createElement('a-tetrahedron');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        tetrahedron.setAttribute(key, parameters[key]);
      }
    }
    return tetrahedron;
  }
  torus(parameters) {
    const torus = document.createElement('a-cylinder');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        torus.setAttribute(key, parameters[key]);
      }
    }
    return torus;
  }
  colladaModel(parameters) {
    const colladaModel = document.createElement('a-collada-model');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        colladaModel.setAttribute(key, parameters[key]);
      }
    }
    return colladaModel;
  }
  objModel(parameters) {
    const objModel = document.createElement('a-obj-model');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        objModel.setAttribute(key, parameters[key]);
      }
    }
    return objModel;
  }
  gltfModel(parameters) {
    const gltfModel = document.createElement('a-gltf-model');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        gltfModel.setAttribute(key, parameters[key]);
      }
    }
    return gltfModel;
  }

  entity(parameters) {
    const entity = document.createElement('a-entity');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        entity.setAttribute(key, parameters[key]);
      }
    }
    return entity;
  }

  animation(parameters) {
    const animation = document.createElement('a-animation');
    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        animation.setAttribute(key, parameters[key]);
      }
    }
    return animation;
  }

  light(parameters) {
    const light = document.createElement('a-light');

    for (const key in parameters) {
      if (parameters.hasOwnProperty(key)) {
        light.setAttribute(key, parameters[key]);
      }
    }
    return light;
  }
}

function moveSlide(direction) {
  const slides = document.querySelectorAll('.slide');

  if (direction === 'next') {
    activeSlide = activeSlide + 1;
  } else {
    activeSlide = activeSlide - 1;
  }

  if (activeSlide < 1) {
    activeSlide = 1;
  }
  if (activeSlide > slides.length) {
    activeSlide = slides.length;
  }

  const nextSlide = document.querySelector(`#slide-${activeSlide}`);
  const nextCameraPosition = nextSlide.dataset.cameraposition;
  const nextCameraRotation = nextSlide.dataset.camerarotation;

  const camera = document.querySelector('#camera');
  camera.setAttribute('position', nextCameraPosition);
  camera.setAttribute('rotation', nextCameraRotation);
}

function runAction(action) {
  const actions = new Actions();
  actions.addEntities(action.type, action.parameters, action.children);
}

export default function changeSlide(direction) {
  const actions = slideActions[activeSlide];

  if (actions && (currentAction !== Object.keys(actions).length) && actions[currentAction].complete === false) {
    runAction(actions[currentAction]);
    actions[currentAction].complete = true;
    currentAction++;
  } else {
    moveSlide(direction);
    currentAction = 0;
  }
}
