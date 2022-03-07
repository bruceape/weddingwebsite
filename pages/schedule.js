import Navigation from '../components/navigation'
import styles from '../styles/Schedule.module.css'

function Item( {time, title, description, detailsDescription, details }) {
  detailsDescription = detailsDescription || ''
  let descItems = detailsDescription
    .split('\n')
    .map((i) =>
      <p className={styles.detailsDescription}>
        {i}
      </p>
    )

  details = details || []
  let detailItems = details.map((d) =>
    <li className={styles.detailsItem}>
      <span className={styles.detailsHighlight}>
        {d.title}:
      </span>
      {d.content}
    </li>
  )

  return (
    <div className={styles.item}>
      <div className={styles.itemMeta}>
        <div className={styles.eventTitle}>{time} / {title}</div>
        <div className={styles.eventDescription}>
          {description}
        </div>
      </div>
      <div className={styles.detailsContainer}>
        <h3 className={styles.detailsTitle}>
          Details
        </h3>   
        <div className={styles.detailsDescriptionContainer}>
          {descItems}
        </div>
        { detailItems.length
          ? <ul className={styles.detailsList}>
              {detailItems}
            </ul>
          : <></>
        }
      </div>
    </div>
  )
}

function Divider() {
  return (
    <div className={styles.divider}></div>
  )
}


function Section({ data }) {
  const count = data.items.length
  const items = data.items.map((i, idx) =>
    <>
      <Item
        title={i.title}
        time={i.time}
        description={i.description}
        detailsDescription={i.detailsDescription}
        details={i.details}
      />
      {idx < count - 1 ? <Divider /> : <></>}
    </>
  )

  return (
    <div className={styles.section}>
      <h2 className={`${styles.sectionTitle} garamond-italic`}>
        {data.title}
      </h2>
      <div className={styles.itemContainer}> 
        {items}
      </div>
    </div>
  )
}

const schedule = [{
    title: 'Friday, May 27',
    items: [{
      title: 'Most guests arrive',
      time: 'All day',
      description: 'Bridesmaids and groomsmen are not obligated to attend as we know many of them are arriving that evening or working. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: [{
        title: 'Transporation', content: 'Best way to get into the city is by Uber or by Bart. Uber ranges from $30-60. BART will be around $10, but you will have to commute from bart station to wherever you are staying.'
      }
    ]}, {
      title: 'Rehearsal',
      time: '4:30 PM',
      description: 'Bridesmaids and groomsmen are not obligated to attend as we know many of them are arriving that evening or working. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Welcome Party',
      time: '7:30 PM - 9:00 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }]
  }, 


  {
    title: 'Saturday, May 28',
    items: [{
      title: 'Guests arrive',
      time: 'All day',
      description: 'Family and bridal party arrives at wedding site. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: [{
        title: 'Transporation', content: 'Best way to get into the city is by Uber or by Bart. Uber ranges from $30-60. BART will be around $10, but you will have to commute from bart station to wherever you are staying.'
      }
    ]}, {
      title: 'Wedding begins',
      time: '3:30 - 3:45 PM',
      description: 'Bridesmaids and groomsmen are not obligated to attend as we know many of them are arriving that evening or working. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Group photo',
      time: '4:00 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Move to reception',
      time: '4:15 - 6:30 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Foreign Cinema opens for guests',
      time: '6:30 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Bride & groom arrive',
      time: '6:45 - 7:00 PM',
      description: 'For our out-of-town guests. We will be having a small get together with pizza, wine/beer, and finger food. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Dinner starts',
      time: '7:30 PM',
      description: 'It’s amazing food—biggest reason why we got this place. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }, {
      title: 'Cake and a few words',
      time: '8:00 PM',
      description: 'It’s amazing food—biggest reason why we got this place. ',
      detailsDescription: 'Getting to the ceremony site is tricky, so please let us know if you would like to carpool with one of us. \n We will film the rehearsal so that anyone who is unable to attend will have a sense of layout and timing. ',
      details: []
    }]
  }
]

export default function Schedule() {
    return (
      <div className={styles.container}>
        <Navigation />

        Schedule

        <div className={styles.sectionList}>
          {schedule.map((a) => <Section data={a} />)}
        </div>
      </div>
    )
}

