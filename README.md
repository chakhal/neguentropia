pre-α.0.ε version

# Install
- libvirt
- sudo apt install libvirt-dev
- sudo apt install nfs-common nfs-kernel-server
- kvm
- vagrant (install from official website)
- vagrant plugin install vagrant-libvirt

# Launch
- sudo start-statd
- sudo service libvirtd start
- ...
- vagrant up

# ansible
ansible -i _ANSIBLE/host all  -a "sudo service nginx restart" 

# Box

ssh root/neguentropia@10.0.0.10  neguentropia.dev
nginx:

ssh root/billy@10.0.0.11 billy.dev

# neguentropia

php -S 0.0.0.0:2000 /src/routing.php

# system dependencies

- 


# Inspired by
http://coreymaynard.com/blog/creating-a-restful-api-with-php/