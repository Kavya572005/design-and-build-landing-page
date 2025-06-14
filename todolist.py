todo_list = []

def show_menu():
    print("\n📝 Simple To-Do List")
    print("1. View Tasks")
    print("2. Add Task")
    print("3. Remove Task")
    print("4. Exit")

while True:
    show_menu()
    choice = input("Enter your choice (1-4): ")

    if choice == '1':
        if not todo_list:
            print("No tasks in your list.")
        else:
            print("\nYour Tasks:")
            for i, task in enumerate(todo_list, 1):
                print(f"{i}. {task}")

    elif choice == '2':
        task = input("Enter a new task: ")
        todo_list.append(task)
        print(f"✅ Task added: {task}")

    elif choice == '3':
        if not todo_list:
            print("No tasks to remove.")
        else:
            print("\nYour Tasks:")
            for i, task in enumerate(todo_list, 1):
                print(f"{i}. {task}")
            try:
                task_num = int(input("Enter the task number to remove: "))
                removed = todo_list.pop(task_num - 1)
                print(f"🗑 Task removed: {removed}")
            except (ValueError, IndexError):
                print("❌ Invalid task number.")

    elif choice == '4':
        print("👋 Exiting To-Do List. Goodbye!")
        break

    else:
        print("❌ Invalid choice. Please enter 1-4.")