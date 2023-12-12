docker build --no-cache -f SQL\Dockerfile.PostgreSql -t kursovaya10/postgre-sql ../SQL

docker build --no-cache -f Dockerfile -t kursovaya10/app ../..
