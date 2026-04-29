import { renderGuidePage } from "./guide-pages"

renderGuidePage({
  day: "Day 2",
  title: "Mindful Prep & Gentle Start",
  intro: "Today, we'll do some light food prep and introduce a simple, powerful habit: intermittent fasting.",
  contentHtml: `
    <p>This gives your digestive system a rest and can offer numerous health benefits.</p>
    <ul class="list-group">
      <li><strong>Morning Task: The "Wellness Elixir."</strong> Start your day with a large glass of warm water with the juice of half a lemon. This simple ritual helps with hydration and prepares your body for the day.</li>
      <li><strong>Food Prep (30 minutes):</strong>
        <ul class="sublist">
          <li>Wash and chop your veggies (broccoli, bell peppers, carrots). Store them in airtight containers.</li>
          <li>Wash your leafy greens and dry them thoroughly.</li>
          <li>Cook a batch of quinoa or lentils so it's ready to use.</li>
        </ul>
      </li>
      <li><strong>Introduce Intermittent Fasting (12/12 Method):</strong>
        <ul class="sublist">
          <li>Simply ensure there is a 12-hour window between your last meal of the day and your first meal of the next day.</li>
          <li>For example, if you finish dinner at 7:30 PM, you would have your breakfast at 7:30 AM the next morning.</li>
        </ul>
      </li>
    </ul>
    <p><strong>Your Quick Win for Day 2:</strong> Enjoy your first "Wellness Elixir" and successfully complete your first 12-hour fasting window. You've already implemented two positive changes!</p>
  `
})
