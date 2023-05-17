import IExperience from '../models/experience'

const url = 'https://my-portfolio-backend-express.herokuapp.com/'

export const getExperiences = async () => {
  let experiences: IExperience[] = [{
    title: '', description: '', employer: '', period: '', highlights: ['']
  }]

  try {
    const response = await fetch(`${url}api/experience`, {
      method: 'GET', 
      headers: { 
        'Content-Type': 'application/json',
        Accept: 'application/json',
      }
    })
    const json = await response.json()
    experiences = [...json]
  } catch (error) {
    console.log(error)
  }
  return experiences
}