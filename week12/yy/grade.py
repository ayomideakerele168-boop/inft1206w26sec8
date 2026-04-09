#grade_calculator.py
def calculate_average(assignments, midterm, final_exam):
    return (assignments + midterm + final_exam) / 2


def determine_grade(score):
    if score > 90:
        return "A"
    elif score > 80:
        return "B"
    elif score > 70:
        return "C"
    elif score > 60:
        return "D"
    else:
        return "F"


def grade_summary(assignments, midterm, final_exam):
    avg = calculate_average(assignments, midterm, final_exam)
    grade = determine_grade(avg)
    return f"Final Score: {avg}, Grade: {grade}"


def main():
    print("=== Student Grade Calculator ===")
    assignments = float(input("Enter assignment mark: "))
    midterm = float(input("Enter midterm mark: "))
    final_exam = float(input("Enter final exam mark: "))

    print(grade_summary(assignments, midterm, final_exam))


if __name__ == "__main__":
    main()
