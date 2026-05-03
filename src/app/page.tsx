export default function Home() {
  return (
    <main style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      alignItems: 'center', 
      justifyContent: 'center', 
      minHeight: '100vh',
      fontFamily: 'sans-serif' 
    }}>
      <h1 style={{ color: '#2563eb', fontSize: '2.5rem' }}>
        Kashmir School Hub
      </h1>
      <p style={{ color: '#4b5563', fontSize: '1.2rem' }}>
        آپ کا اسکول مینجمنٹ سسٹم تیار ہو رہا ہے
      </p>
    </main>
  );
}
