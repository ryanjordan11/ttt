import { renderGuidePage } from "./guide-pages"

renderGuidePage({
  day: "Day 1",
  title: "Gather Your Ingredients & Tools",
  intro: "Today is all about stocking your kitchen for success. No major dietary changes yet—just focus on shopping and setting up.",
  contentHtml: `
    <h3>Part 1: The Prep Phase (Day 1-2)</h3>
    <h3>Your Shopping List</h3>
    <ul class="list-group">
      <li><strong>Hydration:</strong>
        <ul class="sublist">
          <li>Fresh Lemons</li>
          <li>Herbal Teas (Peppermint, Ginger, or Chamomile)</li>
        </ul>
      </li>
      <li><strong>Fresh Produce:</strong>
        <ul class="sublist">
          <li><strong>Leafy Greens:</strong> Spinach, kale, romaine lettuce, collard greens</li>
          <li><strong>Cruciferous Veggies:</strong> Broccoli, cauliflower, asparagus</li>
          <li><strong>Colorful Veggies:</strong> Bell peppers, cucumbers, carrots, tomatoes, sweet potatoes, zucchini</li>
          <li><strong>Fruits:</strong> Berries (fresh or frozen), bananas, apples, avocados</li>
          <li><strong>Sprouts:</strong> Alfalfa or broccoli sprouts</li>
        </ul>
      </li>
      <li><strong>Lean Proteins:</strong>
        <ul class="sublist">
          <li><strong>Plant-based:</strong> Lentils, chickpeas, black beans, firm tofu, edamame</li>
          <li><strong>Animal-based:</strong> Skinless chicken breast, salmon fillets, large shrimp, ground turkey, eggs</li>
        </ul>
      </li>
      <li><strong>Pantry Staples:</strong>
        <ul class="sublist">
          <li>Oats (rolled or steel-cut)</li>
          <li>Quinoa</li>
          <li>Nuts & Seeds: Almonds, walnuts, chia seeds</li>
          <li>Extra virgin olive oil & sesame oil</li>
          <li>Apple cider vinegar & red wine vinegar</li>
          <li>Hummus</li>
          <li>Low-sodium soy sauce (or tamari), no-sugar-added marinara sauce, salsa</li>
        </ul>
      </li>
    </ul>
    <p><strong>Your Quick Win for Day 1:</strong> Set up a "Hydration Station." Fill a large pitcher with water and add lemon slices. Place it somewhere visible in your kitchen as a constant reminder to drink up. Aim to drink one full glass as soon as you get home with your groceries.</p>
  `
})
