var categories = {
	"sports": [
    "Football",
    "Basketball",
    "Track",
    "Soccer",
    "Baseball",
    "Hockey",
    "Swimming",
    "Lacrosse"
  ],
	"muscle": [
    "Neck",
    "Traps",
    "Upper Back",
    "Lower Back",
    "Shoulders",
    "Chest",
    "Biceps",
    "Triceps",
    "Forearms",
    "Quadricaps",
    "Glutes",
    "Hamstrings",
    "Calves",
    "Abs"
  ],
	"functions": [
    "Muscle Building",
    "Muscle Definition",
    "Plyometrics",
    "Stretches"
  ]
}

Template.layout.helpers({
	categories() {
		return categories
	}
})
