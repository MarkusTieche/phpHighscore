<?
$title=htmlspecialchars($_GET['text']);
$title=stripslashes($title);
$name=htmlspecialchars($_GET['name']);
$name=stripslashes($name);
$score=(int)$_GET['score'];

//echo "<span style='color:red'>Welcome <b>$name</b> to JavaScript Kit. So you're <b>$score</b> years old eh?</span>";
//echo "<span style='color:red'>Welcome <b>$name</b> to JavaScript Kit. So you're <b>$score</b> years old eh?</span>";

//$myFile = "../json/".$name.".json";
$myFile = "../json/".$name;
$fh = fopen($myFile, 'a') or die("can't open file");
$stringData = " \n$title  ";
fwrite($fh, $stringData);
fclose($fh);

chmod($fh, 0646);

echo substr(sprintf('%o', fileperms("../json/".$name)), -4);

?>
