<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <title>Title</title>
</head>
<body>
 Testing the load file
</body>
{% for jsFile in jsFiles %}<script type="text/javascript" src="{{jsFile}}"></script>{% endfor %}
</html>