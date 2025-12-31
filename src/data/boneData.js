// Shared bone and muscle data
const getBaseUrl = () => import.meta.env.BASE_URL || '/'

const createBoneData = () => {
  const baseUrl = getBaseUrl()
  return [
    {
      id: 'skull',
      name: 'Skull',
      category: 'Bone',
      description: 'The skull is a bony structure that forms the head. It protects the brain and provides structure to the face.',
      function: 'Protects the brain, houses sensory organs, provides attachment points for muscles',
      image: `${baseUrl}images/bones/skull.png`,
      model3d: `${baseUrl}images/bones/skull.glb`
    },
    {
      id: 'spine',
      name: 'Spine (Vertebral Column)',
      category: 'Bone',
      description: 'The spine consists of 33 vertebrae that protect the spinal cord and provide structural support.',
      function: 'Supports the body, protects spinal cord, enables movement and flexibility',
      image: `${baseUrl}images/bones/spine.png`,
      model3d: `${baseUrl}images/bones/spine.glb`
    },
    {
      id: 'ribcage',
      name: 'Ribcage',
      category: 'Bone',
      description: 'The ribcage consists of 12 pairs of ribs connected to the thoracic vertebrae.',
      function: 'Protects heart and lungs, assists in breathing, provides structural support',
      image: `${baseUrl}images/bones/ribcage.png`,
      model3d: `${baseUrl}images/bones/ribcage.glb`
    },
    {
      id: 'humerus',
      name: 'Humerus',
      category: 'Bone',
      description: 'The humerus is the long bone in the upper arm, extending from shoulder to elbow.',
      function: 'Connects shoulder to elbow, enables arm movement, provides muscle attachment',
      image: `${baseUrl}images/bones/humerus.png`,
      model3d: `${baseUrl}images/bones/humerus.glb`
    },
    {
      id: 'femur',
      name: 'Femur',
      category: 'Bone',
      description: 'The femur is the longest and strongest bone in the body, located in the thigh.',
      function: 'Supports body weight, enables walking and running, provides muscle attachment',
      image: `${baseUrl}images/bones/femur.png`,
      model3d: `${baseUrl}images/bones/femur.glb`
    },
    {
      id: 'tibia',
      name: 'Tibia',
      category: 'Bone',
      description: 'The tibia is the larger of the two bones in the lower leg, also known as the shinbone.',
      function: 'Bears body weight, connects knee to ankle, provides stability',
      image: `${baseUrl}images/bones/tibia.png`,
      model3d: `${baseUrl}images/bones/tibia.glb`
    },
    {
      id: 'biceps',
      name: 'Biceps Brachii',
      category: 'Muscle',
      description: 'The biceps is a two-headed muscle located on the front of the upper arm.',
      function: 'Flexes elbow, supinates forearm, assists in shoulder flexion',
      image: `${baseUrl}images/bones/biceps.png`,
      model3d: `${baseUrl}images/bones/biceps.glb`
    },
    {
      id: 'triceps',
      name: 'Triceps Brachii',
      category: 'Muscle',
      description: 'The triceps is a three-headed muscle on the back of the upper arm.',
      function: 'Extends elbow, assists in shoulder extension and adduction',
      image: `${baseUrl}images/bones/triceps.png`,
      model3d: `${baseUrl}images/bones/triceps.glb`
    },
    {
      id: 'quadriceps',
      name: 'Quadriceps',
      category: 'Muscle',
      description: 'The quadriceps is a group of four muscles on the front of the thigh.',
      function: 'Extends knee, flexes hip, stabilizes knee joint',
      image: `${baseUrl}images/bones/quadriceps.png`,
      model3d: `${baseUrl}images/bones/quadriceps.glb`
    },
    {
      id: 'hamstrings',
      name: 'Hamstrings',
      category: 'Muscle',
      description: 'The hamstrings are a group of three muscles on the back of the thigh.',
      function: 'Flexes knee, extends hip, stabilizes knee and hip joints',
      image: `${baseUrl}images/bones/hamstrings.png`,
      model3d: `${baseUrl}images/bones/hamstrings.glb`
    },
    {
      id: 'deltoid',
      name: 'Deltoid',
      category: 'Muscle',
      description: 'The deltoid is a large triangular muscle covering the shoulder joint.',
      function: 'Abducts, flexes, extends, and rotates the arm at shoulder',
      image: `${baseUrl}images/bones/deltoid.png`,
      model3d: `${baseUrl}images/bones/deltoid.glb`
    },
    {
      id: 'latissimus',
      name: 'Latissimus Dorsi',
      category: 'Muscle',
      description: 'The latissimus dorsi is a large, flat muscle on the back.',
      function: 'Extends, adducts, and medially rotates the arm, assists in breathing',
      image: `${baseUrl}images/bones/latissimus.png`,
      model3d: `${baseUrl}images/bones/latissimus.glb`
    }
  ]
}

export const bodyParts = createBoneData()

export const getBoneById = (id) => {
  return bodyParts.find(part => part.id === id)
}
