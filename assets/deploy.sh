echo "clef  ${key}";
sshpass -p ${key} ssh -o StrictHostKeyChecking=no root@vps554131.ovh.net bash /var/www/script.sh;
ls