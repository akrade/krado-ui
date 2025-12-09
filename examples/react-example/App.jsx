import React, { useState } from 'react';
import { KradoButton, KradoInput } from 'krado-ui';
import 'krado-ui/dist/krado-ui.css';

/**
 * React Example Application
 * Demonstrates usage of Krado UI components in a React application
 */
function App() {
  const [count, setCount] = useState(0);
  const [email, setEmail] = useState('');
  const [name, setName] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsLoading(true);

    // Simulate API call
    setTimeout(() => {
      alert(`Form submitted!\nName: ${name}\nEmail: ${email}`);
      setIsLoading(false);
    }, 2000);
  };

  return (
    <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
      <h1>Krado UI - React Example</h1>

      {/* Button Examples */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Button Examples</h2>

        <div style={{ display: 'flex', gap: '1rem', marginBottom: '1rem', flexWrap: 'wrap' }}>
          <KradoButton onClick={() => setCount(count + 1)}>
            Primary (Clicked {count}x)
          </KradoButton>

          <KradoButton variant="secondary">
            Secondary
          </KradoButton>

          <KradoButton variant="outline">
            Outline
          </KradoButton>

          <KradoButton variant="ghost">
            Ghost
          </KradoButton>

          <KradoButton variant="danger">
            Danger
          </KradoButton>

          <KradoButton variant="success">
            Success
          </KradoButton>
        </div>

        <div style={{ display: 'flex', gap: '1rem', alignItems: 'center', flexWrap: 'wrap' }}>
          <KradoButton size="sm">Small</KradoButton>
          <KradoButton size="md">Medium</KradoButton>
          <KradoButton size="lg">Large</KradoButton>
          <KradoButton loading>Loading...</KradoButton>
          <KradoButton disabled>Disabled</KradoButton>
        </div>
      </section>

      {/* Input Examples */}
      <section style={{ marginBottom: '3rem' }}>
        <h2>Input Examples</h2>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <KradoInput
            label="Name"
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <KradoInput
            label="Email"
            type="email"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            helperText="We'll never share your email with anyone"
            required
          />

          <KradoInput
            label="Password"
            type="password"
            placeholder="Enter password"
            helperText="Must be at least 8 characters"
          />

          <KradoInput
            label="Success State"
            type="text"
            value="Valid input"
            success
            helperText="This field is valid!"
          />

          <KradoInput
            label="Error State"
            type="text"
            value="Invalid input"
            error
            helperText="This field has an error!"
          />

          <div style={{ display: 'flex', gap: '1rem' }}>
            <KradoButton type="submit" loading={isLoading}>
              {isLoading ? 'Submitting...' : 'Submit Form'}
            </KradoButton>
            <KradoButton type="button" variant="outline" onClick={() => {
              setName('');
              setEmail('');
            }}>
              Reset
            </KradoButton>
          </div>
        </form>
      </section>

      {/* Size Examples */}
      <section>
        <h2>Input Sizes</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <KradoInput size="sm" placeholder="Small input" />
          <KradoInput size="md" placeholder="Medium input (default)" />
          <KradoInput size="lg" placeholder="Large input" />
        </div>
      </section>
    </div>
  );
}

export default App;
