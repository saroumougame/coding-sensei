echo "clef  ${key}";
sshpass -p ${key} ssh -o StrictHostKeyChecking=no root@vps554131.ovh.net bash after-tech/script.sh;