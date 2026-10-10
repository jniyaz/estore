import { Container, Button, Grid, Card, Link, Divider } from "@/components/primitives";

export default function Home() {
  return (
    <main className="min-h-screen">
      {/* Hero section */}
      <section className="py-20 md:py-32 bg-neutral-50">
        <Container>
          <div className="text-center max-w-2xl mx-auto">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Luxury Refined
            </h1>
            <p className="text-lg text-secondary mb-8">
              A premium ecommerce experience built with precision and elegance
            </p>
            <div className="flex gap-4 justify-center flex-wrap">
              <Button variant="primary" size="lg">
                Explore Collection
              </Button>
              <Button variant="secondary" size="lg">
                Learn More
              </Button>
            </div>
          </div>
        </Container>
      </section>

      <Divider />

      {/* Design system showcase */}
      <section className="py-16 md:py-24">
        <Container>
          <h2 className="text-3xl font-bold mb-12">Design System</h2>

          {/* Typography */}
          <div className="mb-16">
            <h3 className="text-2xl font-semibold mb-8">Typography</h3>
            <div className="space-y-6">
              <div>
                <p className="text-xs text-tertiary mb-2">Extra Small</p>
                <p className="text-xs">The quick brown fox jumps</p>
              </div>
              <div>
                <p className="text-sm text-tertiary mb-2">Small</p>
                <p className="text-sm">The quick brown fox jumps</p>
              </div>
              <div>
                <p className="text-base text-tertiary mb-2">Base</p>
                <p className="text-base">The quick brown fox jumps</p>
              </div>
              <div>
                <p className="text-lg text-tertiary mb-2">Large</p>
                <p className="text-lg">The quick brown fox jumps</p>
              </div>
              <div>
                <p className="text-xl text-tertiary mb-2">Extra Large</p>
                <p className="text-xl">The quick brown fox jumps</p>
              </div>
            </div>
          </div>

          <Divider />

          {/* Colors */}
          <div className="my-16">
            <h3 className="text-2xl font-semibold mb-8">Color Palette</h3>
            <Grid cols={4} gap="compact">
              <Card bordered>
                <div className="w-full h-24 bg-neutral-900 rounded-md mb-4" />
                <p className="font-medium text-sm">Neutral 900</p>
              </Card>
              <Card bordered>
                <div className="w-full h-24 bg-neutral-600 rounded-md mb-4" />
                <p className="font-medium text-sm">Neutral 600</p>
              </Card>
              <Card bordered>
                <div className="w-full h-24 bg-accent-600 rounded-md mb-4" />
                <p className="font-medium text-sm">Accent 600</p>
              </Card>
              <Card bordered>
                <div className="w-full h-24 bg-accent-500 rounded-md mb-4" />
                <p className="font-medium text-sm">Accent 500</p>
              </Card>
            </Grid>
          </div>

          <Divider />

          {/* Buttons */}
          <div className="my-16">
            <h3 className="text-2xl font-semibold mb-8">Button Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div>
                <p className="text-sm text-tertiary mb-4 font-medium">
                  Primary Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="primary" size="sm">
                    Small
                  </Button>
                  <Button variant="primary" size="md">
                    Medium
                  </Button>
                  <Button variant="primary" size="lg">
                    Large
                  </Button>
                  <Button variant="primary" disabled>
                    Disabled
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-tertiary mb-4 font-medium">
                  Secondary Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="secondary" size="sm">
                    Small
                  </Button>
                  <Button variant="secondary" size="md">
                    Medium
                  </Button>
                  <Button variant="secondary" size="lg">
                    Large
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-tertiary mb-4 font-medium">
                  Ghost Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="ghost" size="sm">
                    Small
                  </Button>
                  <Button variant="ghost" size="md">
                    Medium
                  </Button>
                  <Button variant="ghost" size="lg">
                    Large
                  </Button>
                </div>
              </div>

              <div>
                <p className="text-sm text-tertiary mb-4 font-medium">
                  Accent Buttons
                </p>
                <div className="flex flex-wrap gap-3">
                  <Button variant="accent" size="sm">
                    Small
                  </Button>
                  <Button variant="accent" size="md">
                    Medium
                  </Button>
                  <Button variant="accent" size="lg">
                    Large
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <Divider />

          {/* Cards and Grid */}
          <div className="my-16">
            <h3 className="text-2xl font-semibold mb-8">Cards and Grid</h3>
            <Grid cols={3}>
              <Card>
                <h4 className="font-semibold mb-2">Card One</h4>
                <p className="text-sm text-secondary">
                  Premium cards with subtle borders and refined spacing
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Card Two</h4>
                <p className="text-sm text-secondary">
                  Perfect for product grids and content layouts
                </p>
              </Card>
              <Card>
                <h4 className="font-semibold mb-2">Card Three</h4>
                <p className="text-sm text-secondary">
                  Responsive design with clean typography
                </p>
              </Card>
            </Grid>
          </div>

          <Divider />

          {/* Spacing */}
          <div className="my-16">
            <h3 className="text-2xl font-semibold mb-8">Responsive Spacing</h3>
            <div className="space-y-4">
              <div className="bg-accent-100 h-12 rounded flex items-center px-4">
                Spacing 12 (3rem)
              </div>
              <div className="bg-accent-100 h-16 rounded flex items-center px-4">
                Spacing 16 (4rem)
              </div>
              <div className="bg-accent-100 h-24 rounded flex items-center px-4">
                Spacing 24 (6rem)
              </div>
            </div>
          </div>
        </Container>
      </section>
    </main>
  );
}
