/**
 * Utility to load exercises dynamically from folder structure
 * For pain areas that have folder-based exercises (like neck)
 */

const getBaseUrl = () => import.meta.env.BASE_URL

/**
 * Known exercise folders for each pain area
 * This maps pain area IDs to their exercise folder names
 */
const exerciseFolders = {
  neck: [
    'Chin Tuck',
    'Isometric Neck Extension',
    'Isometric Neck Flexion',
    'Levator Scapulae Stretch',
    'Neck Extension',
    'Neck Flexion',
    'Neck Rotation',
    'Neck Side Bending',
    'Scapular Retraction',
    'Upper Trapezius stretch'
  ],
  back: [
    'Pelvic Tilt',
    'Knee-to-Chest Stretch',
    'Cat-Cow Stretch',
    'Child\'s Pose',
    'Bridging',
    'Bird Dog',
    'Seated Forward Bend',
    'Standing Back Extension',
    'Lumbar Rotation Stretch',
    'Wall Sits'
  ],
  hip: [
    'Hip Flexor Stretch',
    'Glute Bridge',
    'Clamshell',
    'Standing Hip Abduction',
    'Piriformis Stretch',
    'Hip Adductor Stretch',
    'Standing Hip Extension',
    'Figure-4 Stretch',
    'Side-Lying Leg Raise',
    'Hip Circles'
  ],
  ankle: [
    'Ankle Pumps',
    'Ankle Circles',
    'Calf Stretch',
    'Heel Raises',
    'Toe Raises',
    'Towel Stretch',
    'Resistance Band Ankle Strengthening',
    'Single-Leg Balance',
    'Heel-to-Toe Walking',
    'Ankle Alphabet'
  ],
  elbow: [
    'Elbow Flexion and Extension',
    'Wrist Flexor Stretch',
    'Wrist Extensor Stretch',
    'Forearm Pronation and Supination',
    'Ball Squeeze',
    'Isometric Wrist Extension',
    'Isometric Wrist Flexion',
    'Towel Twist',
    'Resistance Band Elbow Exercises',
    'Finger Stretch and Extension'
  ],
  shoulder: [
    'Pendulum Exercise',
    'Shoulder Rolls',
    'Shoulder Flexion',
    'Shoulder Abduction',
    'Wall Climbing',
    'Cross-Body Shoulder Stretch',
    'External Rotation',
    'Internal Rotation',
    'Scapular Retraction',
    'Wall Push-Ups'
  ],
  knee: [
    'Quadriceps Sets',
    'Straight Leg Raise',
    'Heel Slides',
    'Hamstring Stretch',
    'Standing Hamstring Curl',
    'Mini Squats',
    'Step-Ups',
    'Wall Sits',
    'Calf Raises',
    'Knee Extension'
  ],
  wrist: [
    'Wrist Flexion Stretch',
    'Wrist Extension Stretch',
    'Wrist Circles',
    'Fist Open-Close',
    'Finger Stretch',
    'Prayer Stretch',
    'Reverse Prayer Stretch',
    'Wrist Strengthening',
    'Ball or Towel Squeeze',
    'Resistance Band Wrist Exercises'
  ]
}

/**
 * Fetch description from description.txt file
 */
export const fetchExerciseDescription = async (painArea, exerciseFolderName) => {
  try {
    const baseUrl = getBaseUrl()
    const descriptionPath = `${baseUrl}images/pain-areas/${painArea}/${exerciseFolderName}/description.txt`
    const response = await fetch(descriptionPath)
    
    if (response.ok) {
      const description = await response.text()
      return description.trim()
    }
    return null
  } catch (error) {
    console.warn(`Failed to load description for ${exerciseFolderName}:`, error)
    return null
  }
}

/**
 * Check if images exist for an exercise
 */
export const checkExerciseImagesExist = async (painArea, exerciseFolderName) => {
  try {
    const baseUrl = getBaseUrl()
    const image1Path = `${baseUrl}images/pain-areas/${painArea}/${exerciseFolderName}/1.png`
    const response = await fetch(image1Path, { method: 'HEAD' })
    return response.ok
  } catch (error) {
    return false
  }
}

/**
 * Load all exercises for a pain area
 */
export const loadExercisesForPainArea = async (painArea) => {
  const folders = exerciseFolders[painArea]
  
  if (!folders) {
    return null // Return null to use fallback data
  }

  const exercises = []
  
  for (const folderName of folders) {
    const description = await fetchExerciseDescription(painArea, folderName)
    const imagesExist = await checkExerciseImagesExist(painArea, folderName)
    
    if (description || imagesExist) {
      exercises.push({
        name: folderName,
        description: description || 'Exercise description not available.',
        folderName: folderName
      })
    }
  }
  
  return exercises.length > 0 ? exercises : null
}

/**
 * Get title for pain area
 */
export const getPainAreaTitle = (painArea) => {
  const titles = {
    neck: 'Neck Pain Relief Exercises',
    back: 'Back Pain Relief Exercises',
    shoulder: 'Shoulder Pain Relief Exercises',
    knee: 'Knee Pain Relief Exercises',
    wrist: 'Wrist Pain Relief Exercises',
    ankle: 'Ankle Pain Relief Exercises',
    hip: 'Hip Pain Relief Exercises',
    elbow: 'Elbow Pain Relief Exercises'
  }
  return titles[painArea] || 'Exercise Instructions'
}

