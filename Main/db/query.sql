SELECT departments.department_name AS departments, employees.employee
FROM  employees
LEFT JOIN departments
ON employees.department_id = departments.id
ORDER BY departments.department_name;