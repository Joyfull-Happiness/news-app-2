export default function NewsCard({ newsProp }) {
  return (
    <div className="card-container">
      {newsProp.map((object, index) => (
        <div
          key={index}
          style={{
            backgroundColor: 'white', // white card background
            padding: '20px', // space inside the card
            borderRadius: '10px', // rounded corners
            boxShadow: '0 2px 8px rgba(0, 0, 0, 0.05)', // subtle shadow
            marginBottom: '20px', // space between cards
            maxWidth: '600px',
          }}
          className="card"
        >
          <h4
            style={{
              fontSize: '20px',
              fontWeight: 'bold',
              color: '#1a1a1a',
              marginBottom: '10px',
            }}
          >
            {object.title}
          </h4>
          <p>{object.description}</p>
          <a
            href={object.url}
            target="_blank"
            style={{
              color: '#ff4500',
              fontWeight: 'bold',
              textDecoration: 'none',
            }}
          >
            Read more{' '}
          </a>
        </div>
      ))}
    </div>
  );
}
